/*
  Given an integer array of coins[] of size N representing different types of currency and an integer sum,
  The task is to find the number of ways to make the sum by using different combinations from coins[].  

  Note: Assume that you have an infinite supply of each type of coin, and that each element of coins will be unique. 
*/

// Version with caching
function coinChanger(coinArray, sum, cache = {}) {
  if (sum < 0 || coinArray.length <= 0) {
    cache[`${coinArray}-${sum}`] = 0;
    return 0;
  }

  if (sum === 0) {
    cache[`${coinArray}-${sum}`] = 1;
    return 1;
  }

  if (cache[`${coinArray}-${sum}`]) {
    return cache[`${coinArray}-${sum}`]
  }

  const originalArray = [...coinArray];
  const lastElement = coinArray.pop();

  const subtractedSumValue = cache[`${originalArray}-${(sum - lastElement)}`] = coinChanger(originalArray, sum - lastElement, cache);
  const reducedCoinArrayValue = cache[`${coinArray}-${sum}`] = coinChanger(coinArray, sum, cache);

  return subtractedSumValue + reducedCoinArrayValue;
};

// Non-cached version
// function coinChanger(coinArray, sum) {
//   if (sum < 0 || coinArray.length <= 0) {
//     return 0;
//   }

//   if (sum === 0) {
//     return 1;
//   }

//   const originalArray = [...coinArray];
//   const lastElement = coinArray.pop();

//   const subtractedSumValue = coinChanger(originalArray, sum - lastElement);
//   const reducedCoinArrayValue = coinChanger(coinArray, sum);

//   return subtractedSumValue + reducedCoinArrayValue;
// };

module.exports = {
  coinChanger
};
