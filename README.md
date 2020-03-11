# Edit in case of cloning template
- [LICENSE](./LICENSE)
- [package.json](./package.json)
- [.devcontainer/devcontainer.json](./.devcontainer/devcontainer.json) Add extensions and open some ports if neccessary

# Contribute
## Get started

Run `npm run full` to do everything from installing packages up to generating docs.

## Develop

Keep `npm run watch` running in the background. Change this npm-script if you do more fancy stuff.

# Toolchain

- eslint lints **everything** from typescript to markdown (check [.eslintrc.json](./.eslintrc.json)'s overrides). 
- [.npmignore](./.npmignore) ignores everything except listed exceptions
- This repo uses vscode devcontainer: https://code.visualstudio.com/docs/remote/containers
- Everything is focused on vscode. If that's not your IDE, check "extensions" in [.devcontainer/devcontainer.json](./.devcontainer/devcontainer.json) for the list of extensions in use

# Docs

[Typedocs](./docs/typedoc/README.md)