function sortedFrequency(arr, target) {
  let firstIndex, lastIndex;
  if (arr[0] === target) {
    firstIndex = 0;
  } else {
    firstIndex = findFirstIndex(arr, target);
  }
  if (arr[arr.length - 1] === target) {
    lastIndex = arr.length - 1;
  } else {
    lastIndex = findLastIndex(arr, target);
  }
  if (firstIndex === -1 || lastIndex === -1) {
    return -1;
  }
  return 1 + lastIndex - firstIndex;
}

function findFirstIndex(
  arr,
  target,
  leftIndex = 0,
  rightIndex = arr.length - 1
) {
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (leftIndex > rightIndex) {
    return -1;
  }
  if (arr[midIndex] === target) {
    if (arr[midIndex - 1] < target) {
      return midIndex;
    } else {
      return findFirstIndex(
        arr,
        target,
        leftIndex,
        (rightIndex = midIndex - 1)
      );
    }
  }
  if (arr[midIndex] > target) {
    return findFirstIndex(arr, target, leftIndex, (rightIndex = midIndex - 1));
  }
  if (arr[midIndex] < target) {
    return findFirstIndex(arr, target, (leftIndex = midIndex + 1), rightIndex);
  }
}
function findLastIndex(
  arr,
  target,
  leftIndex = 0,
  rightIndex = arr.length - 1
) {
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (leftIndex > rightIndex) {
    return -1;
  }
  if (arr[midIndex] === target) {
    if (arr[midIndex + 1] > target) {
      return midIndex;
    } else {
      return findLastIndex(arr, target, (leftIndex = midIndex + 1), rightIndex);
    }
  }
  if (arr[midIndex] > target) {
    return findLastIndex(arr, target, leftIndex, (rightIndex = midIndex - 1));
  }
  if (arr[midIndex] < target) {
    return findLastIndex(arr, target, (leftIndex = midIndex + 1), rightIndex);
  }
}

module.exports = sortedFrequency;
