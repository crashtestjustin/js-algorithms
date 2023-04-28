//testing creating a bubble sort algorithm

//repeat until counter is 0
//set counter to 0
//look at array adjacent pairs, if the sceond value is smaller, swap the pairs and add 1 to the counter

let testArray = [1, 6, 5, 4, 8, 6, 9, 13, 44, 2];
let testArrayTwo = [100, 96, 85, 77, 68, 54, 42, 35, 21, 19, 9, 5, 4, 2];

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
console.log(bubble(testArrayTwo));
