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

git pull origin main --rebase

rm -rf yarn.lock .pnp.cjs .pnp.loader.mjs node_modules/ packages/*/node_modules packages/*/dist



feat	Introduces a new feature (🔼 triggers a minor version bump: 1.x.0)
fix	Fixes a bug (🔼 triggers a patch version bump: 1.0.x)
perf	Improves performance (🔼 considered a fix, triggers a patch bump)
refactor	Code restructuring/refactoring without fixing bugs or adding features
chore	Maintenance tasks (e.g., updating dependencies, configs, build scripts)
docs	Documentation updates (README, comments, API docs, etc.)
style	Code style changes (e.g., formatting, linting—no functional changes)
test	Adds or modifies tests
ci	Changes to CI/CD pipeline configuration
build	Changes affecting the build system (e.g., Webpack, Babel)
revert	Reverts a previous commit
wip	Work in progress (not typically used in final commits)

git commit -m "feat: add user authentication module"
git commit -m "fix: resolve race condition in data processing"
git commit -m "perf: optimize database query execution time"
git commit -m "chore: update dependencies"
git commit -m "docs: update API usage instructions"


feat:	Minor (1.x.0)
fix:	Patch (1.0.x)
perf:	Patch (1.0.x)
Other types (docs, style, chore, etc.)	No version bump

git commit -m "feat: change user authentication API

BREAKING CHANGE: The login API now requires OAuth instead of passwords."




npx lerna init

