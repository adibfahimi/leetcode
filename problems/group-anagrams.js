/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const b = str.split("").sort().join();
    let a = map.get(b) || [];
    a.push(str);
    map.set(b, a);
  }

  return Array.from(map.values());
};
