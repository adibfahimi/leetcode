/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let output = [];

  function dfs(openN, closeN, s) {
    if (s.length === n * 2) {
      output.push(s);
      return;
    }

    if (openN < n) {
      dfs(openN + 1, closeN, s + "(");
    }

    if (closeN < openN) {
      dfs(openN, closeN + 1, s + ")");
    }
  }

  dfs(0, 0, "");
  return output;
};
