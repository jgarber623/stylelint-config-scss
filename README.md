# stylelint-config-scss

Shareable [Stylelint](https://stylelint.io) configuration for SCSS syntax [Sass](https://sass-lang.com) files.

> **Note**
>
> See [@jgarber/eslint-config](https://www.npmjs.com/package/@jgarber/stylelint-config) for a shareable Stylelint configuration suitable for CSS files.

## Installation

```sh
npm install --save-dev @jgarber/stylelint-config-scss
```

## Usage

Stylelint supports [a variety of configuration file formats](https://stylelint.io/user-guide/configure).

### YAML

In a file named `.stylelintrc` or `.stylelintrc.yml`:

```yaml
---
extends: "@jgarber/stylelint-config-scss"
---
```

### JSON

In a file named `.stylelintrc` or `.stylelintrc.json`:

```json
{
  "extends": "@jgarber/stylelint-config-scss"
}
```

### JavaScript

In a JavaScript file using [CommonJS module](https://nodejs.org/api/modules.html) syntax:

```js
// stylelint.config.cjs
module.exports = require('@jgarber/stylelint-config-scss');
```

In a JavaScript file using [ECMAScript module (ESM)](https://nodejs.org/api/esm.html) syntax:

```js
// stylelint.config.mjs

import config from '@jgarber/stylelint-config-scss';

export default config;
```
