function findFloor(arr, target, leftIndex = 0, rightIndex = arr.length - 1) {
  if (arr[0] > target || leftIndex > rightIndex) {
    return -1;
  }
  if (arr[arr.length - 1] <= target) {
    return arr[arr.length - 1];
  }
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[midIndex] <= target && arr[midIndex + 1] >= target) {
    return arr[midIndex];
  }
  if (arr[midIndex] > target) {
    return findFloor(arr, target, leftIndex, (rightIndex = midIndex - 1));
  }
  return findFloor(arr, target, (leftIndex = midIndex + 1), rightIndex);
}

module.exports = findFloor;
