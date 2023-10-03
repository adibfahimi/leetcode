function isPalindrome(s: string): boolean {
  let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }

  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
