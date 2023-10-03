function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map<number, number>();

  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  let arr = [...map.entries()].sort((a, b) => b[1] - a[1]);

  return arr.slice(0, k).map((a) => a[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
