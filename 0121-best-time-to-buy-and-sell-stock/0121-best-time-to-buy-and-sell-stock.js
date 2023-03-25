/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let min = Infinity;
    let max = 0;

    for(let i = 0; i < prices.length ; i++){
      min = Math.min(prices[i], min);
      max = Math.max(prices[i] - min, max);
    }

    return max;
};
