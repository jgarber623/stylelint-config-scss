# @jgarber/stylelint-config-scss

**Shareable [Stylelint](https://stylelint.io) configuration for SCSS syntax [Sass](https://sass-lang.com) files.**

[![npm](https://img.shields.io/npm/v/@jgarber/stylelint-config-scss.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/stylelint-config-scss)
[![Downloads](https://img.shields.io/npm/dt/@jgarber/stylelint-config-scss.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/stylelint-config-scss)
[![Build](https://img.shields.io/github/actions/workflow/status/jgarber623/stylelint-config-scss/ci.yml?branch=main&logo=github&style=for-the-badge)](https://github.com/jgarber623/stylelint-config-scss/actions/workflows/ci.yml)

> [!NOTE]
> See [@jgarber/stylelint-config](https://www.npmjs.com/package/@jgarber/stylelint-config) for a shareable Stylelint configuration suitable for CSS files.

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

In a JavaScript file using [ECMAScript module (ESM)](https://nodejs.org/api/esm.html) syntax:

```js
// stylelint.config.mjs
export { default } from "@jgarber/stylelint-config.scss";
```

In a JavaScript file using [CommonJS module](https://nodejs.org/api/modules.html) syntax:

```js
// stylelint.config.cjs
module.exports = {
  extends: "@jgarber/stylelint-config-scss"
};
```

## License

@jgarber/stylelint-config-scss is freely available under the [MIT License](https://opensource.org/licenses/MIT).
