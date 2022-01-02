function findRotationCount(arr, leftIndex = 0, rightIndex = arr.length - 1) {
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  console.log(
    { leftIndex, rightIndex, midIndex },
    arr[leftIndex],
    arr[midIndex],
    arr[rightIndex]
  );

  if (leftIndex > rightIndex || arr[0] < arr[arr.length - 1]) {
    return 0;
  }
  if (arr[midIndex - 1] > arr[midIndex]) {
    return midIndex;
  }
  if (arr[0] < arr[midIndex]) {
    return findRotationCount(arr, (leftIndex = midIndex + 1), rightIndex);
  }
  if (arr[0] > arr[midIndex]) {
    return findRotationCount(arr, leftIndex, (rightIndex = midIndex - 1));
  }
}

module.exports = findRotationCount;
