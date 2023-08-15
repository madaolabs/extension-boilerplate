# Extension boilerplate

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Infrastructure

The boilerplate is designed using clean architecture.

The **_domain** folder holds some data type files.  

The **_app** folder holds some single function files, can be tested, can call the **_domain** folder.

The **_api** folder holds some business logic files, can call the **_app** and **_domain** folder.

The **_ui** folder holds some ui files. can call the **_api** folder.

The **_extension** folder holds extension files, used in the **manifest.json**

```shell
src
   - _api
   - _app
   - _domain
   - _extension
   - _ui

manifest.json
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
