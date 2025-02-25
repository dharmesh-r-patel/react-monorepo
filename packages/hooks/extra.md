{
  "name": "@infineit/react-hooks",
  "version": "1.4.0",
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "package.json",
    "README.md"
  ],
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "require": "./dist/cjs/index.js",
      "import": "./dist/es/index.mjs",
      "default": "./dist/cjs/index.js"
    }
  },
  "scripts": {
    "build": "yarn clean && rollup -c",
    "clean": "rm -rf dist"
  },
  "devDependencies": {
    "@rollup/plugin-commonjs": "^28.0.2",
    "@rollup/plugin-node-resolve": "^16.0.0",
    "rollup": "^4.34.6",
    "rollup-plugin-typescript2": "^0.36.0",
    "typescript": "^5.7.3"
  },
  "peerDependencies": {
    "@types/react": "^19.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "sideEffects": false,
  "publishConfig": {
    "access": "public"
  },
  "gitHead": "5d1a40cd7e518ac8b2544d2ffaffe0b6c16e952c"
}


{
  "extends": "../../tsconfig.json",
  "exclude": [
      "node_modules",
      "build",
      "**/__tests__/*",
      "jest.setup.tsx",
      "dev",
      // "types",
      "dev/examples.framer",
      "test",
      "skins",
      // "dist",
      "temp",
      "api",
      "cypress"
  ],
  "compilerOptions": {
  }
}

// {
//   "compilerOptions": {
//     "module": "ESNext",
//     "target": "ESNext",
//     "lib": ["DOM", "ESNext"],
//     "jsx": "react-jsx",
//     "declaration": true,
//     "outDir": "dist",
//     "moduleResolution": "Bundler",
//     "esModuleInterop": true,
//     "skipLibCheck": true
//   },
//   "include": ["src"]
// }