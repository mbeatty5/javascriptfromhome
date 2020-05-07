// Week 4 Homework 2 - Array Manipulation 2
'use strict';

// Define an empty array
 let numberArray = [];

// Create an array of length 1000 with an index for each item, starting at 0
 for (let i = 0; i < 1000; i++) {
    numberArray.push(i);
};

// Use forEach to square each element in the array
numberArray.forEach(function(element, index, array) {
    array[index] = element * element;
});

// Use map to map each element to an object with element value and index properties
let mapArray = numberArray.map(function(element, i) {
    return {
        value: element,
        index: i
    };
});

// Test output
console.log(numberArray);
console.log(mapArray);