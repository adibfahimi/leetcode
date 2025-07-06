/**
 * A faster anagram checker using an array for character counts.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCounts = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    charCounts[s.charCodeAt(i) - aCode]++;
    charCounts[t.charCodeAt(i) - aCode]--;
  }

  for (let count of charCounts) {
    if (count !== 0) return false;
  }

  return true;
};
