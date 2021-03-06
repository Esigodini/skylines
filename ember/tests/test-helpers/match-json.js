/* globals QUnit */

import match from 'match-json';

export default function registerMatchJsonAssertion() {
  QUnit.assert.matchJson = function (value, expected, message) {
    let result = match(value, expected);
    this.pushResult({ result, actual: value, expected, message });
  };
}
