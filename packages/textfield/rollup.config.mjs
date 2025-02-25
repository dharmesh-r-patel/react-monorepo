// import typescript from 'rollup-plugin-typescript2';
import typescript from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve"
// import replace from "@rollup/plugin-replace"
import dts from "rollup-plugin-dts"
import pkg from "./package.json" with { type: "json"}
// import tsconfig from "./tsconfig.json" with { type: "json" }
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

// export const replaceSettings = (env) => {
//     const replaceConfig = env
//         ? {
//               "process.env.NODE_ENV": JSON.stringify(env),
//               preventAssignment: false,
//           }
//         : {
//               preventAssignment: false,
//           }

//     replaceConfig.__VERSION__ = `${pkg.version}`

//     return replace(replaceConfig)
// }

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
        // entryFileNames: `[name].js`,
        // dir: "dist",
        // format: "cjs",
        // exports: "named",
        // esModule: true
      //   file: 'dist/index.cjs.js', format: 'cjs'
    },
    // plugins: [  typescript(), resolve({ extensions: [".ts", ".tsx", ".js", ".jsx"] }), replaceSettings()],
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

// const cjs = {
//   input: "src/index.ts",
//   output: {
//     file: "dist/index.cjs.js",
//     format: "cjs",
//   },
//   // plugins: [
//   //   typescript(),  // ✅ Add TypeScript compilation back
//   //   resolve({ extensions: [".ts", ".tsx", ".js", ".jsx"] }),  // ✅ Ensure Rollup resolves TS files
//   //   replaceSettings(),
//   //   preserveDirectives(),
//   // ],
//   plugins: [typescript(), resolve(), commonjs(), replaceSettings()],
//    external,
//  // external: ['react', '@mui/material']
// };


export const es = Object.assign({}, config, {
    input: ["src/index.ts"],
    output: {
        file: packageJson.module,
        format: 'es',
        sourcemap: false,
        name: packageJson.name,
        // entryFileNames: "[name].mjs",
        // format: "es",
        // exports: "named",
        // preserveModules: true,
        // dir: "dist",
      //  file: 'dist/index.esm.js', format: 'esm'
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

//  const typePlugins = [dts({compilerOptions: {...tsconfig, baseUrl:"types"}})]

// function createTypes(input, file) {   
//     return {
//         input,
//         output: {
//             format: "es",
//             file: file,
//         },
//         plugins: typePlugins,
//     }
// }




// const types = createTypes("types/index.d.ts", "dist/index.d.ts")

// ✅ Fix: Generate types from src/index.ts instead of "types/index.d.ts"
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
//   external: ['react', '@mui/material', '@infineit/react-hooks']
// };

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