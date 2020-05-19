/**
 * Returns true if arr1 is equal to arr2
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {boolean}
 */
function isEqual(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) {
    return false;
  }

  let equals = true;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      equals = false;
      break;
    }
  }

  return equals;
}

/**
 * Compares each element of arr1 with each
 * element of arr2 and returns the difference
 * of those values.
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function diff(arr1, arr2) {
  return arr1.map((item, index) => item - arr2[index]);
}

/**
 * Returns a random number between 0 and limit
 * @param {number} limit
 * @returns {number}
 */
function getRandomNumber(limit) {
  return Math.round(Math.random() * limit);
}

/**
 * Returns a random set of coordinates
 * @param {number} limit
 * @returns {Object}
 */
function getNextFoodSpot(limit) {
  const x = getRandomNumber(limit);
  const y = getRandomNumber(limit);

  return [x, y];
}

export { isEqual, diff, getNextFoodSpot };
