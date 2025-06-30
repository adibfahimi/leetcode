/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      const a = map.get(diff);

      if (a != undefined) 
        return [a,i];
      }
      

      map.set(nums[i], i);
    }
};
