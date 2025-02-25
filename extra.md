{
  "compilerOptions": {
      "target": "es2018",
      "module": "esnext",
      "moduleResolution": "bundler",
      "isolatedModules": false,
      "importHelpers": true,
      "jsx": "react-jsx",
      "esModuleInterop": true,
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true,
      "declaration": true,
      "declarationDir": "types",
      "noLib": false,
      "preserveConstEnums": true,
      "sourceMap": true,
      "strictNullChecks": true,
      "noImplicitAny": true,
      "noImplicitThis": true,
      "noImplicitUseStrict": false,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "removeComments": false,
      "lib": ["es2017", "dom"],
      "skipLibCheck": true,
      "downlevelIteration": true,
      "stripInternal": true
  },
  "compileOnSave": false,
  "buildOnSave": false
}


{
  "name": "@infineit/react-monorepo",
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "build": "lerna run build",
    "build:public": "lerna run --no-private build",
    "release:version": "lerna version --no-changelog --no-push --no-git-tag-version --no-private --force-publish=@react-monorepo/core-downloads-tracker",
    "release:build": "lerna run --concurrency 8 --no-private build --skip-nx-cache",
    "lint": "yarn workspaces foreach --all --exclude . run lint",
    "publish-packed-packages": "FORCE_COLOR=true yarn workspaces foreach --all --topological --exclude . run publish-packed-package",
    "clean": "rm -rf yarn.lock .pnp.cjs .pnp.loader.mjs node_modules/"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@rollup/plugin-replace": "^6.0.2",
    "@types/react": "^19.0.8",
    "lerna": "^8.1.9",
    "rollup-plugin-preserve-directives": "^0.4.0"
  },
  "packageManager": "yarn@4.6.0"
}


{
  "version": "independent",
  "npmClient": "yarn",
  "packages": [
    "packages/*"
  ],
  "ignoreChanges": [
    "**/src/test/**",
    "**/src/*.test.*"
  ],
  "command": {
    "publish": {
      "conventionalCommits": true,
      "noGitTagVersion": true,
      "yes": true
    }
  }
}


