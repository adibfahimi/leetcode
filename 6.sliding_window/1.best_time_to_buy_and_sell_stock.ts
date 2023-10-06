function maxProfit(prices: number[]): number {
  let max = 0;
  let l = 0, r = 1;

  while (r < prices.length) {
    if (prices[l] < prices[r])
      max = Math.max(max, prices[r] - prices[l]);
    else
      l = r;

    r++;
  }

  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
