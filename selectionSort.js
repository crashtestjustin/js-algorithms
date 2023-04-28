let testArray = [1, 6, 5, 4, 8, 6, 9, 13, 44, 2]; //sample array

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

console.log(selectionSort(testArray));
