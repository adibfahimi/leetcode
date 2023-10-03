function productExceptSelf(nums: number[]): number[] {
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let a = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) a *= nums[j];
    }

    result.push(a);
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
