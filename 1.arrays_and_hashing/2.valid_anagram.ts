function isAnagram(s: string, t: string): boolean {
  let map = new Map<string, number>();

  for (const c of s) {
    const a = map.get(c);
    if (a == undefined) map.set(c, 1);
    else map.set(c, a + 1);
  }

  for (const c of t) {
    const a = map.get(c);
    if (a == undefined) return false;
    else if (a == 1) map.delete(c);
    else map.set(c, a - 1);
  }

  if (map.size > 0) return false;

  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("ab", "a")); // false
