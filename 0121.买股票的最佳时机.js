var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0;
  }

  let minPrice = prices[0],
    maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};

// -----------------------------------------
var maxProfit = function (prices) {

  let min = prices[0]
  let max = 0
  for (let i of prices) {
    if (i < min)
      min = i
    max = max > i - min ? max : i - min
  }
  return max
};