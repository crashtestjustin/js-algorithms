let testArray = [100, 96, 85, 77, 68, 54, 42, 35, 21, 19, 9, 5, 4, 2]; //sample array

function mergeSort(array) {
  if (array.length <= 1) {
    return array; //base case for single digit sub-arrays
  }

  const midPoint = Math.floor(array.length / 2); //setting mid point to split into two sub-arrays
  const leftArr = array.slice(0, midPoint);
  const rightArr = array.slice(midPoint);

  const sortedLeftArr = mergeSort(leftArr); //recursively calling mergeSort on the two sub-arrays created until we get to the base case
  const sortedRightArr = mergeSort(rightArr);

  const mergedArray = merge(sortedLeftArr, sortedRightArr); //running merge (below) to order the sub-arrrays
  return mergedArray;
}

//this merge function runs at each iteration of sub-arrays until we are back at the original array length
function merge(leftArr, rightArr) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  //while both arrays have values, order them in ascending fashion
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      mergedArray.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  //this while and the next while loops take over once one sub-array no longer has values
  while (leftIndex < leftArr.length) {
    mergedArray.push(leftArr[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightArr.length) {
    mergedArray.push(rightArr[rightIndex]);
    rightIndex++;
  }
  return mergedArray;
}

console.log(mergeSort(testArray));
