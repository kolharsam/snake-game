import { DIRECTION } from "../constants";

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

  for (let iter = 0; iter < arr1.length; iter++) {
    if (arr1[iter] !== arr2[iter]) {
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
  return Math.floor(Math.random() * limit);
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

/**
 * Returns true if currentCell is within the grid
 * @param {number[]} currentCell
 * @param {number} numCell
 * @returns {boolean}
 */
function isValidCell(currentCell, numCell) {
  const [x, y] = currentCell;

  return x > -1 && y > -1 && x < numCell && y < numCell;
}

/**
 * Returns true if the snake bites into itself
 * @param {number[][]} snake
 * @returns {boolean}
 */
function bitMe(snake) {
  return (
    snake.slice(1).filter((c) => {
      return isEqual(snake[0], c);
    }).length !== 0
  );
}

/**
 * Returns true keyCode is for the arrow keys
 * @param {number} keyCode
 * @returns {boolean}
 */
function isValidKeyPress(keyCode) {
  return Object.values(DIRECTION).some((direction) => keyCode === direction);
}

export { isEqual, diff, getNextFoodSpot, isValidCell, bitMe, isValidKeyPress };
