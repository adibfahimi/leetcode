function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, string[]>();

  for (const str of strs) {
    const a = str.split("").sort().join("");

    if (map.has(a)) map.get(a)?.push(str);
    else map.set(a, [str]);
  }

  return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
