/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let maxPrice = 0;

  while (r < prices.length) {
    const lPrice = prices[l];
    const rPrice = prices[r];

    if (lPrice < rPrice) {
      maxPrice = Math.max(maxPrice, rPrice - lPrice);
    } else {
      l = r;
    }
    r += 1;
  }

  return maxPrice;
};
