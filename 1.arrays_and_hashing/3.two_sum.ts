function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const a = map.get(diff);
    if (a === undefined) map.set(nums[i], i);
    else return [a, i];
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
