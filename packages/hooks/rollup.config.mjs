import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from "@rollup/plugin-replace"
import preserveDirectives from "rollup-plugin-preserve-directives";

import pkg from "./package.json" with { type: "json"}

// export default {
//   input: 'src/index.ts',
//   output: [
//     { file: 'dist/index.cjs.js', format: 'cjs' },
//     { file: 'dist/index.esm.js', format: 'esm' }
//   ],
//   plugins: [typescript(), resolve(), commonjs()],
//   external: ['react', '@mui/material']
// };

const config = {
  input: 'src/index.ts',
}

export const replaceSettings = (env) => {
  const replaceConfig = env
      ? {
            "process.env.NODE_ENV": JSON.stringify(env),
            preventAssignment: false,
        }
      : {
            preventAssignment: false,
        }

  replaceConfig.__VERSION__ = `${pkg.version}`

  return replace(replaceConfig)
}


const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.optionalDependencies || {}),
  "react/jsx-runtime",
]

const cjs = Object.assign({}, config, {
  input: 'src/index.ts',
  output: {
     file: 'dist/index.cjs.js', format: 'cjs' 
  },
  plugins: [typescript(), resolve(), commonjs(), replaceSettings()],
  external,
  onwarn(warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return
      }
      warn(warning)
  }
})

export const esm = Object.assign({}, config, {
  input: "src/index.ts",
  output: { file: "dist/index.esm.js", format: "esm" },
  plugins: [typescript(), resolve(), replaceSettings(process.env.NODE_ENV), preserveDirectives()],
  external,
  onwarn(warning, warn) {
    if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
      return;
    }
    warn(warning);
  },
});


export default [
  cjs,
  esm,
]
