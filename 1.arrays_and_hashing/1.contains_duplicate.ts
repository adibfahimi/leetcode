function containsDuplicate(nums: number[]): boolean {
  let map = new Map<number, boolean>();

  for (const n of nums) {
    const a = map.get(n);
    if (a != undefined) return true;
    map.set(n, true);
  }

  return false;
}

const nums = [1, 2, 3, 4];

console.log(containsDuplicate(nums));
