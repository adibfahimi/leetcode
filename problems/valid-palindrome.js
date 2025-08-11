const CHAR_a = "a".charCodeAt(0);
const CHAR_z = "z".charCodeAt(0);
const CHAR_A = "A".charCodeAt(0);
const CHAR_Z = "Z".charCodeAt(0);
const CHAR_0 = "0".charCodeAt(0);
const CHAR_9 = "9".charCodeAt(0);

const isAlphanumeric = (c) => {
  const code = c.charCodeAt(0);
  return (
    (code >= CHAR_a && code <= CHAR_z) ||
    (code >= CHAR_A && code <= CHAR_Z) ||
    (code >= CHAR_0 && code <= CHAR_9)
  );
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (!isAlphanumeric(s[l])) {
      l++;
      continue;
    }

    if (!isAlphanumeric(s[r])) {
      r--;
      continue;
    }

    if (s[l].toLowerCase() != s[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};
