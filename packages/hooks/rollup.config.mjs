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
// import url from '@rollup/plugin-url';
// import preserveDirectives from "rollup-plugin-preserve-directives";


// import * as fs from 'fs';
// import path from 'path';

// const PACKAGE_NAME = process.cwd();
// const packageJson = JSON.parse(fs.readFileSync(path.join(PACKAGE_NAME, 'package.json'), 'utf-8'));

// const includePaths = ['**/*.woff', '**/*.woff2', '**/*.svg', '**/*.png'];


// const config = {
//   input: 'src/index.ts',
// }

// const external = [
//   ...Object.keys(packageJson.dependencies || {}),
//   ...Object.keys(packageJson.peerDependencies || {}),
//   ...Object.keys(packageJson.optionalDependencies || {}),
//   "react/jsx-runtime",
// ]


// const cjs = Object.assign({}, config, {
//   input: 'src/index.ts',
//   output: {
//     file: packageJson.main,
//     format: 'cjs',
//     sourcemap: false,
//     name: packageJson.name,
//   },
//   plugins: [typescript(), resolve(), commonjs(),
//         url({
//       fileName: '[name][extname]',
//       include: includePaths,
//       limit: 0,
//     }),
//   ],
//   external,
//   onwarn(warning, warn) {
//       if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
//           return
//       }
//       warn(warning)
//   }
// })

// export const esm = Object.assign({}, config, {
//   input: "src/index.ts",
//   output: { 
//       file: packageJson.module,
//       format: 'es',
//       sourcemap: false,
//       name: packageJson.name,
//    },
//   plugins: [typescript(), resolve(), preserveDirectives(),
//         url({
//       fileName: '[name][extname]',
//       include: includePaths,
//       limit: 0,
//     }),
//   ],
//   external,
//   onwarn(warning, warn) {
//     if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
//       return;
//     }
//     warn(warning);
//   },
// });

// export default [
//   cjs,
//   esm,
// ]


// import {defineConfig} from 'rollup';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import typescript from '@rollup/plugin-typescript';
// import {terser} from 'rollup-plugin-terser';
// import url from '@rollup/plugin-url';

// import dts from "rollup-plugin-dts";

// import * as fs from 'fs';
// import path from 'path';

// const PACKAGE_NAME = process.cwd();
// const packageJson = JSON.parse(fs.readFileSync(path.join(PACKAGE_NAME, 'package.json'), 'utf-8'));

// const includePaths = ['**/*.woff', '**/*.woff2', '**/*.svg', '**/*.png'];

// export default defineConfig([{
//   input: 'src/index.ts',
//   output: [
//     {
//       file: packageJson.main,
//       format: 'cjs',
//       sourcemap: false,
//       name: packageJson.name,
//     },
//     {
//       file: packageJson.module,
//       format: 'es',
//       sourcemap: false,
//       name: packageJson.name,
//     },
//   ],
//   plugins: [
//     resolve(),
//     commonjs(),
//     typescript({ tsconfig: './tsconfig.build.json', declaration: true,
//         declarationDir: 'dist' }),
//     terser(),
//     url({
//       fileName: '[name][extname]',
//       include: includePaths,
//       limit: 0,
//     }),
//   ],
//   external: [...Object.keys(packageJson.peerDependencies || {})],
// }
// ]);


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


// import typescript from 'rollup-plugin-typescript2';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import replace from "@rollup/plugin-replace"
// import preserveDirectives from "rollup-plugin-preserve-directives";

// import pkg from "./package.json" with { type: "json"}

// // export default {
// //   input: 'src/index.ts',
// //   output: [
// //     { file: 'dist/index.cjs.js', format: 'cjs' },
// //     { file: 'dist/index.esm.js', format: 'esm' }
// //   ],
// //   plugins: [typescript(), resolve(), commonjs()],
// //   external: ['react', '@mui/material']
// // };

// const config = {
//   input: 'src/index.ts',
// }

// export const replaceSettings = (env) => {
//   const replaceConfig = env
//       ? {
//             "process.env.NODE_ENV": JSON.stringify(env),
//             preventAssignment: false,
//         }
//       : {
//             preventAssignment: false,
//         }

//   replaceConfig.__VERSION__ = `${pkg.version}`

//   return replace(replaceConfig)
// }


// const external = [
//   ...Object.keys(pkg.dependencies || {}),
//   ...Object.keys(pkg.peerDependencies || {}),
//   ...Object.keys(pkg.optionalDependencies || {}),
//   "react/jsx-runtime",
// ]

// const cjs = Object.assign({}, config, {
//   input: 'src/index.ts',
//   output: {
//      file: 'dist/index.cjs.js', format: 'cjs' 
//   },
//   plugins: [typescript(), resolve(), commonjs(), replaceSettings()],
//   external,
//   onwarn(warning, warn) {
//       if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
//           return
//       }
//       warn(warning)
//   }
// })

// export const esm = Object.assign({}, config, {
//   input: "src/index.ts",
//   output: { file: "dist/index.esm.js", format: "esm" },
//   plugins: [typescript(), resolve(), replaceSettings(process.env.NODE_ENV), preserveDirectives()],
//   external,
//   onwarn(warning, warn) {
//     if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
//       return;
//     }
//     warn(warning);
//   },
// });


// export default [
//   cjs,
//   esm,
// ]
