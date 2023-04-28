//testing binary search
//split sorted array in half - is value smaller or larger than midpoint?
//if smaller: repeat search with new adjusted end of array (mid point - 1)
//if larger: repeat search with new adjusted start of array (mid point + 1)
//continue until array is length 0

let testArray = [1, 2, 4, 5, 6, 7, 8, 9, 13, 44];

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return "Value not in array!"; // If the target is not found in the array
}

console.log(binarySearch(testArray, 7));
