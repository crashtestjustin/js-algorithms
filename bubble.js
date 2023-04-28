let testArray = [1, 6, 5, 4, 8, 6, 9, 13, 44, 2]; //sample array

function bubble(array) {
  let counter = 1;
  while (counter !== 0) {
    counter = 0;
    for (let i = 0; i < array.length; i++) {
      let firstIndex = i;
      let secondIndex = i + 1;
      if (array[secondIndex] < array[firstIndex]) {
        const temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
        counter++;
      }
    }
  }

  return array;
}

console.log(bubble(testArray));
