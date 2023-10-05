function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  let m = 0;

  while (l <= r) {
    m = l + Math.floor((r - l) / 2);
    const v = nums[m];

    if (v == target)
      return m;
    else if (v < target)
      l = m + 1;
    else if (v > target)
      r = m - 1;
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1
