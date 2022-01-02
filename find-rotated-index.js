function findRotatedIndex(arr, target) {
  let indexOfSmallest = findRotationCountIndex(arr);
  if (target <= arr[arr.length - 1] && target >= arr[indexOfSmallest]) {
    return binarySearch(arr, target, indexOfSmallest, arr.length - 1);
  } else if (target <= arr[indexOfSmallest - 1] && target >= arr[0]) {
    return binarySearch(arr, target, 0, indexOfSmallest - 1);
  } else {
    return -1;
  }
}

function findRotationCountIndex(
  arr,
  leftIndex = 0,
  rightIndex = arr.length - 1
) {
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
    return findRotationCountIndex(arr, (leftIndex = midIndex + 1), rightIndex);
  }
  if (arr[0] > arr[midIndex]) {
    return findRotationCountIndex(arr, leftIndex, (rightIndex = midIndex - 1));
  }
}
function binarySearch(arr, val, leftIndex = 0, rightIndex = arr.length - 1) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[midIndex] === val) {
    return midIndex;
  }
  if (arr[midIndex] > val) {
    return binarySearch(arr, val, leftIndex, (rightIndex = midIndex - 1));
  }
  if (arr[midIndex] < val) {
    return binarySearch(arr, val, (leftIndex = midIndex + 1), rightIndex);
  }
}

module.exports = findRotatedIndex;
