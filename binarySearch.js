// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   while (leftIndex <= rightIndex) {
//     let midIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (arr[midIndex] < target) {
//       leftIndex = midIndex + 1;
//     } else if (arr[midIndex] > target) {
//       rightIndex = midIndex - 1;
//     } else {
//       return midIndex;
//     }
//   }
//   return -1;
// }

function binarySearch(arr, target, leftIndex = 0, rightIndex = arr.length - 1) {
  if (leftIndex > rightIndex) return -1;
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[midIndex] < target) {
    return binarySearch(arr, target, (leftIndex = midIndex + 1), rightIndex);
  }
  if (arr[midIndex] > target) {
    return binarySearch(arr, target, leftIndex, (rightIndex = midIndex - 1));
  }
  if (arr[midIndex] === target) {
    return midIndex;
  }
}

// incorrect:
// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   let midIndex = Math.floor((leftIndex + rightIndex) / 2);
//   console.log({ leftIndex, rightIndex, midIndex, arr });
//   if (arr.length === 0) {
//     return -1;
//   }
//   if (arr[midIndex] === target) {
//     return midIndex;
//   }
//   if (arr[midIndex] < target) {
//     return binarySearch(arr.slice(midIndex + 1), target);
//   }
//   if (arr[midIndex] > target) {
//     return binarySearch(arr.slice(0, midIndex), target);
//   }
// }

console.log(binarySearch([0, 1, 2, 5, 6, 7, 8, 9, 10], 10)); //8
// console.log(binarySearch([0, 1, 2, 5, 6, 7, 8, 9, 10], 1)); //1
// console.log(binarySearch([0, 1, 2, 5, 6, 7, 8, 9, 10], 2)); //2
// console.log(binarySearch([0, 1, 2, 5, 6, 7, 8, 9, 10], 100)); //-1

module.exports = {
  binarySearch,
};
