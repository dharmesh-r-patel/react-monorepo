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
    "dist",
    "temp",
    "api",
    "cypress"
  ],
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "compilerOptions": {
    "noEmit": false,
    "declaration": true,
    "emitDeclarationOnly": true
  }
}



// {
//     "compilerOptions": {
//       "module": "ESNext",
//       "target": "ESNext",
//       "lib": ["DOM", "ESNext"],
//       "jsx": "react-jsx",
//       "declaration": true,
//       "outDir": "dist",
//       "moduleResolution": "node",
//       "esModuleInterop": true,
//       "skipLibCheck": true
//     },
//     "include": ["src"]
//   }