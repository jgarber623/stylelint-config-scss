const fs = require('node:fs');
const stylelint = require('stylelint');
const test = require('ava');

const config = require('../index');

test('module.exports', t => {
  t.like(config, {
    extends: ['stylelint-config-standard-scss', '@stylistic/stylelint-config'],
    plugins: ['stylelint-order']
  });
});

test('loads the configuration and validates correct syntax', async t => {
  const code = fs.readFileSync('./test/helpers/valid.scss', 'utf8');
  const { errored } = await stylelint.lint({ code, config });

  t.false(errored);
});

test('loads the configuration and invalidates incorrect syntaxx', async t => {
  const code = fs.readFileSync('./test/helpers/invalid.scss', 'utf8');
  const { errored, results } = await stylelint.lint({ code, config });

  t.true(errored);

  t.like(results, [
    {
      errored: true,
      warnings: [
        { rule: 'scss/comment-no-loud' },
        { rule: 'scss/selector-no-redundant-nesting-selector' },
        { rule: 'scss/comment-no-empty' },
        { rule: 'scss/at-rule-no-unknown' }
      ]
    }
  ]);
});
