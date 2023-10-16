module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-stylistic/config'
  ],
  plugins: ['stylelint-order'],
  rules: {
    // Require an empty line before at-rules.
    //
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else']
      }
    ],

    // Specify the alphabetical order of properties within declaration blocks.
    //
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md
    'order/properties-alphabetical-order': true,

    // Disallow `@use` without a namespace (i.e. `@use "..." as *`).
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-use-no-unnamespaced/README.md
    'scss/at-use-no-unnamespaced': true,

    // Disallow `/*`-comments.
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-loud/README.md
    'scss/comment-no-loud': true,

    // Disallow properties with `-` in their names to be in a form of a nested
    // group.
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-nested-properties/README.md
    'scss/declaration-nested-properties': 'never',

    // Disallow non-numeric values when interpolating a value with a unit.
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values/README.md
    'scss/dimension-no-non-numeric-values': true,

    // Require a newline after the colon in `$`-variable declarations.
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-newline-after/README.md
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',

    // Require a single empty line after `$`-variable declarations.
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-after/README.md
    'scss/dollar-variable-empty-line-after': [
      'always',
      {
        except: ['before-dollar-variable', 'last-nested'],
        ignore: ['before-comment', 'inside-single-line-block']
      }
    ],

    // Disallow assignment to namespaced Sass variables.
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-namespaced-assignment/README.md
    'scss/dollar-variable-no-namespaced-assignment': true,

    // Encourage the use of the `scale-color` function over regular color
    // functions.
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-color-relative/README.md
    'scss/function-color-relative': true,

    // Disallow unknown functions.
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-no-unknown/README.md
    'scss/function-no-unknown': true,

    // Disallow duplicate mixins within a stylesheet.
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-mixins/README.md
    'scss/no-duplicate-mixins': true,

    // Disallow the use of global function names, as these global functions are
    // now located inside built-in Sass modules.
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md
    'scss/no-global-function-names': true,

    // Disallow redundant nesting selectors (`&`).
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md
    'scss/selector-no-redundant-nesting-selector': true,

    // Disallow union class names with the parent selector (`&`).
    //
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-union-class-name/README.md
    'scss/selector-no-union-class-name': true,

    // Require a newline after the closing brace of blocks.
    //
    // https://github.com/elirasza/stylelint-stylistic/tree/main/lib/rules/block-closing-brace-newline-after
    'stylistic/block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else']
      }
    ],

    // Specify Unix or Windows linebreaks.
    //
    // https://github.com/elirasza/stylelint-stylistic/tree/main/lib/rules/linebreaks
    'stylistic/linebreaks': 'unix',

    // Disallow the Unicode Byte Order Mark.
    //
    // https://github.com/elirasza/stylelint-stylistic/tree/main/lib/rules/unicode-bom
    'stylistic/unicode-bom': 'never'
  }
};
