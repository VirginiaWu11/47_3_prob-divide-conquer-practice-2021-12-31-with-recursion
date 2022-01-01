function countZeroes(arr, leftIndex = 0, rightIndex = arr.length - 1) {
  if (arr[arr.length - 1] === 1) return 0;
  if (arr[0] === 0) return arr.length;

  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[midIndex] > arr[midIndex + 1]) {
    return arr.length - midIndex - 1;
  }
  if (arr[midIndex] === 1) {
    return countZeroes(arr, (leftIndex = midIndex + 1), rightIndex);
  }
  if (arr[midIndex] === 0) {
    return countZeroes(arr, leftIndex, (rightIndex = midIndex - 1));
  }
}

module.exports = countZeroes;
