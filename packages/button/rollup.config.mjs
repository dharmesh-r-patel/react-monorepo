import typescript from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve"
import dts from "rollup-plugin-dts"
import pkg from "./package.json" with { type: "json"}
import preserveDirectives from "rollup-plugin-preserve-directives";
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser'
import url from '@rollup/plugin-url';

import * as fs from 'fs';
import path from 'path';

const config = {
    input: "src/index.ts",
}

const PACKAGE_NAME = process.cwd();
const packageJson = JSON.parse(fs.readFileSync(path.join(PACKAGE_NAME, 'package.json'), 'utf-8'));

const includePaths = ['**/*.woff', '**/*.woff2', '**/*.svg', '**/*.png'];

const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.optionalDependencies || {}),
    "react/jsx-runtime","react","react-dom", "@mui/material", "@infineit/react-hooks"
]

const cjs = Object.assign({}, config, {
    input: "src/index.ts",
    output: {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
        name: packageJson.name,
    },
    plugins: [resolve(), commonjs(), typescript(),  terser(), preserveDirectives(),     
       url({
        fileName: '[name][extname]',
        include: includePaths,
        limit: 0,
      }),],
    external,
    onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
            return
        }
        warn(warning)
    }
})

export const es = Object.assign({}, config, {
    input: ["src/index.ts"],
    output: {
        file: packageJson.module,
        format: 'es',
        sourcemap: false,
        name: packageJson.name,
    },
    plugins: [resolve(), typescript(), terser(), preserveDirectives(),     
      url({
        fileName: '[name][extname]',
        include: includePaths,
        limit: 0,
      }),],
    external,
    onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
            return
        }
        warn(warning)
    }
})

const types = {
  input: "src/index.ts",
  output: { file: 'dist/types/index.d.ts', format: 'es' },
  plugins: [dts()]
};

// eslint-disable-next-line import/no-default-export
export default [
    cjs,
     es,
    types,
]


// import typescript from 'rollup-plugin-typescript2';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';

// export default {
//   input: 'src/index.ts',
//   output: [
//     { file: 'dist/index.cjs.js', format: 'cjs' },
//     { file: 'dist/index.esm.js', format: 'esm' }
//   ],
//   plugins: [typescript(), resolve(), commonjs()],
//   external: ['react', '@mui/material']
// };
