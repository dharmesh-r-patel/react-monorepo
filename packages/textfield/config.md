{
  "name": "@infineit/react-textfield",
  "version": "1.1.3",
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "package.json",
    "README.md",
    "src"
  ],
  "scripts": {
    "build": "rollup -c"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@infineit/react-hooks": "workspace:^",
    "@mui/material": "^6.4.3"
  },
  "devDependencies": {
    "@rollup/plugin-commonjs": "^28.0.2",
    "@rollup/plugin-node-resolve": "^16.0.0",
    "rollup": "^4.34.6",
    "rollup-plugin-dts": "^6.1.1",
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
      "dev/examples.framer",
      "test",
      "skins",
      "temp",
      "api",
      "cypress"
  ],
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "types",
    "paths": {
        "@infineit/react-hooks": ["../hooks/src"],
        "@infineit/react-hooks/*": ["../hooks/src/*"]
    }
  }
}





{
    "extends": "../../tsconfig.json",
    "exclude": [
      "node_modules",
      "build",
      "**/__tests__/*",
      "jest.setup.tsx",
      "dev",
      "types",
      "dev/examples.framer",
      "test",
      "skins",
      "dist",
      "temp",
      "api",
      "cypress"
    ],
    "compilerOptions": {
      "outDir": "dist",
      "declarationDir": "types",
      "declaration": true,
      "declarationMap": true,
      "emitDeclarationOnly": false,
      "paths": {
        "@react-monorepo/hooks": ["../hooks/src"],
        "@react-monorepo/hooks/*": ["../hooks/src/*"]
      }
    }
  }
  
  
  // {
  //   "extends": "../../tsconfig.json",
  //   "exclude": [
  //       "node_modules",
  //       "build",
  //       "**/__tests__/*",
  //       "jest.setup.tsx",
  //       "dev",
  //       "types",
  //       "dev/examples.framer",
  //       "test",
  //       "skins",
  //       "dist",
  //       "temp",
  //       "api",
  //       "cypress"
  //   ],
  //   "compilerOptions": {
  //      "outDir": "dist",
  //      "declarationDir": "types",
  //     "paths": {
  //         "@react-monorepo/hooks": ["../hooks/src"],
  //         "@react-monorepo/hooks/*": ["../hooks/src/*"]
  //     }
  //   }
  // }
  
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
  //     "skipLibCheck": true,
  //     "paths": {
  //       "@react-monorepo/hooks": ["../hooks/src"],
  //       "@react-monorepo/hooks/*": ["../hooks/src/*"]
  //     }
  //   },
  //   "include": ["src"]
  // }
  
  // {
  //   // This config is for emitting declarations (.d.ts) only
  //   // Actual .ts source files are transpiled via babel
  //   "extends": "../../tsconfig.json",
  //   "compilerOptions": {
  //     "composite": true,
  //     "declaration": true,
  //     "noEmit": false,
  //     "emitDeclarationOnly": true,
  //     "outDir": "build/esm",
  //     "rootDir": "./src"
  //   },
  //   "include": ["src/**/*", "test/**/*"],
  //   "exclude": ["src/**/*.spec.ts*", "src/**/*.test.ts*"],
  //   "references": [
  //     { "path": "../hooks/tsconfig.json" },
  //   ]
  // }
  
  // {
  //   "extends": "../../tsconfig.json",
  //   "include": ["src/**/*", "test/**/*"],
  //    "compilerOptions": {
  //      "moduleResolution": "Bundler",
  //      "composite": true,
  //      "noEmit": false,
  //    },
  //    "references": [
  //     { "path": "../hooks/tsconfig.json" },
  //   ],
  //   "exclude": ["test/typescript/moduleAugmentation", "src/types/OverridableComponentAugmentation.ts"]
  // }
  
  
  
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
  //     "skipLibCheck": true,
  //     "paths": {
  //       "@react-monorepo/hooks": ["../hooks/src"],
  //     }
  //   },
  //   "include": ["src"]
  // }
  