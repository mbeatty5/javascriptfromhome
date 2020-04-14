// checks if input is number type (true) else outputs typeof and false
function isNumberType(input) {
 if (typeof input === 'number') {
   return true;
 } else {
   console.log(typeof input);
   return false;
 }
}

// squares the input regardless of type
function square(numToSquare) {
  // write code that satisfies above function description.
  return numToSquare * numToSquare;
}

// adds 2 inputs together; if 2nd input is not typeof number, it adds the 1st input to itself; 
function add(number1, number2) {
  if(typeof number2 !== 'number') {
  return number1 + number1;
  } else 
  return number1 + number2;
}

// declare variables
let x = 1;
let y = 2;

// result if declaration was correct, else outputs the incorrect variable type
if (isNumberType(x) && isNumberType(y)) {
 let result = add(square(x), square(y));
 console.log(result);
}
