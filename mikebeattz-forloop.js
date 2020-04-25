'use strict'; // this is important pls no erase we'll go over it eventually

// function to loop through an array and return largest number
function findLargestNumber(numArray) {
  let maxNum = 0;
  for (let i = 0; i < numArray.length; i++) {
    const currentNum = numArray[i];  
    if (currentNum > maxNum) {
        maxNum = currentNum;
    }
  }
  return maxNum; // clearly wrong, please replace with right code
}

// define two arrays for testing
const smallArr = [1, 23, 1, 139, 3];
const largeArr = generateRandomArray(100);

// output statements
console.log('Largest number in the smallArr array is ', findLargestNumber(smallArr));
console.log('Largest number in the largeArr array is ', findLargestNumber(largeArr));

// function to generate a random array
function generateRandomArray(size) {
  const arrToReturn = [];
  for (let i = 0; i < size; i++) {
    // push is a function property in arrays that appends an element to the end of the array
    arrToReturn.push(Math.floor(Math.random() * 10000));
  }
  return arrToReturn;
}