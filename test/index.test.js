import assert from "node:assert";
import fs from "node:fs";
import test from "node:test";

import stylelint from "stylelint";

import config from "@jgarber/stylelint-config-scss";

test("default export", () => {
  /**
   * The Node.js assert module doesn't include a matcher similar to AVA's `like`
   * matcher. So, manually assign the values under test to `actual`.
   *
   * @see {@link https://nodejs.org/docs/latest-v20.x/api/assert.html}
   * @see {@link https://github.com/avajs/ava/blob/HEAD/docs/03-assertions.md#likeactual-selector-message}
   */
  const actual = {
    extends: config.extends,
    plugins: config.plugins,
  };

  const expected = {
    extends: ["stylelint-config-standard-scss", "@stylistic/stylelint-config"],
    plugins: ["stylelint-order"],
  };

  assert.deepStrictEqual(actual, expected);
});

test("loads the configuration and validates correct syntax", async () => {
  const code = fs.readFileSync("./test/helpers/valid.scss", "utf8");
  const { errored } = await stylelint.lint({ code, config });

  assert.strictEqual(errored, false);
});

test("loads the configuration and invalidates incorrect syntax", async () => {
  const code = fs.readFileSync("./test/helpers/invalid.scss", "utf8");
  const { errored, results } = await stylelint.lint({ code, config });

  /**
   * The `results` array contains a single object with a `warnings` key whose
   * value is an array of objects containing detailed error information. For the
   * purposes of this test, we care most about the rule name.
   */
  const actual = {
    errored,
    warnings: results[0].warnings.map(({ rule }) => rule),
  };

  const expected = {
    errored: true,
    warnings: [
      "scss/comment-no-loud",
      "scss/selector-no-redundant-nesting-selector",
      "scss/comment-no-empty",
      "scss/at-rule-no-unknown",
    ],
  };

  assert.deepStrictEqual(actual, expected);
});
