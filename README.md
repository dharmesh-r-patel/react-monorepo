# Yarn Workspaces Template

This is a template for a monorepo using yarn workspaces, TypeScript, ESLint etc.

> [!WARNING]
> Before you start working, make sure to find and replace all occurrences of `@react-monorepo` with your project or NPM/GitHub organization name, and `rm yarn.lock` for a fresh start.

## Project Structure

- `packages/`: Libraries under this monorepo, can be private or publishable.


yarn set version stable
yarn -v
yarn config set nodeLinker node-modules
yarn workspaces list
yarn install
yarn build

rm -rf yarn.lock .pnp.cjs .pnp.loader.mjs node_modules/ packages/*/node_modules packages/*/dist
