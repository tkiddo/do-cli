# do-cli

## develop trail

- ### init 

```shell
npm init -y
git init
```

- ### typescript

```shell
npm install typescript
```

add tsconfig.json

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2015",
    "module": "ESNext",
    "moduleResolution": "node"
  }
}
```

- ### eslint & prettier & husky & lint-staged

```shell
npm install eslint prettier husky lint-staged @typescript-eslint/eslint-plugin @typescript-eslint/parser-D
```

add scripts in package.json

```json
{
  "scripts": {
    "prepare": "husky install",
    "lint-staged": "lint-staged"
  },
  "lint-staged": {
    "src/**/*.{js,ts}": [
      "eslint --fix",
      "prettier --write"
    ]
  },
}
```

then husky install 

```shell
npm run prepare
```

add husky pre-commit shell.

next,eslint config:

```js
//.eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
}
```

```json
// .prettierrc
{
  "printWidth": 100,
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}

```

- ### rollup

```shell
npm install @rollup/plugin-typescript rollup -D
```

add rollup.config.js

```js
const typescript = require('@rollup/plugin-typescript')

module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    banner: '#!/usr/bin/env node',
  },
  plugins: [typescript()],
}

```

- ### jest

```shell
npm install jest @babel/preset-env @babel/preset-typescript -D
```

add .babelrc

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    "@babel/preset-typescript"
  ]
}

```

at last, start coding.