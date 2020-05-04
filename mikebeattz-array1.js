// Week 4 Homework 1 - Array Manipulation 1

// Define an empty array
 let indexArray = [];

// Create an array of length 100 with an index for each item
 for (let i = 0; i < 100; i++) {
    indexArray.push(i + 1);
};

// Add 10 to each item in the array
for (let i = 0; i < indexArray.length; i++) {
    indexArray[i] = indexArray[i] + 10;
};

// Remove 50 from the array and exit (break)
for (let i = 0; i < indexArray.length; i++) {
    if (indexArray[i] === 50) {
        indexArray.splice(i, 1);
        break;
    };
};

// test output
console.log(indexArray);
console.log(indexArray.length);