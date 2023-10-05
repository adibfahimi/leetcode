function isValid(s: string): boolean {
  const stack: string[] = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const c of s) {
    if (map[c])
      stack.push(map[c]);
    else if (stack.pop() !== c)
      return false;
  }


  return !stack.length;
};


console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
