const fs = require('node:fs');
const stylelint = require('stylelint');

const config = require('../index');

it('exports an Object', () => {
  expect(config).toEqual(jasmine.objectContaining({
    extends: [
      'stylelint-config-standard-scss',
      'stylelint-stylistic/config'
    ],
    plugins: ['stylelint-order']
  }));
});

it('loads the config and validates correct syntax', async () => {
  const code = fs.readFileSync('./spec/valid.scss', 'utf8');
  const { errored } = await stylelint.lint({ code, config });

  expect(errored).toBe(false);
});

it('loads the config and invalidates incorrect syntax', async () => {
  const code = fs.readFileSync('./spec/invalid.scss', 'utf8');
  const { errored, results } = await stylelint.lint({ code, config });

  expect(errored).toBe(true);

  expect(results[0].warnings.map(({ rule }) => rule))
    .toEqual(jasmine.arrayContaining(
      [
        'scss/at-rule-no-unknown',
        'scss/comment-no-empty',
        'scss/comment-no-loud',
        'scss/selector-no-redundant-nesting-selector'
      ]
    ));
});
