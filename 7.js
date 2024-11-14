/**
 *  Think that you have an unlimited number of carrots, but a limited number of carrot types. Also, you have one bag that can hold a limited weight. Each type of carrot has a weight and a price. Write a function that takes carrotTypes and capacity and return the maximum value the bag can hold. [Python or Javascript]
    Example:
    carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
    capacity = 36 //kg
    getMaxValue(carrotTypes, capacity)
 */
function getMaxValue(carrotTypes, capacity) {
  const n = carrotTypes.length;
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { kg, price } = carrotTypes[i - 1];
    for (let w = 1; w <= capacity; w++) {
      if (w >= kg) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - kg] + price);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}
