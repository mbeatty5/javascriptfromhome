///// Objects


// Declare Fruits

let banana = {
    color: 'yellow',
    shape: 'crescent',
    price: 0.40
};

let orange = {
    color: 'orange',
    shape: 'sphere',
};



// Read fruit name and output properties

function fruitProperties(fruitName) {
    if (typeof fruitName !== 'object' || fruitName === undefined) {
        console.error('Your fruit has not been declared');
    } else if (fruitName.hasOwnProperty('color') &&
               fruitName.hasOwnProperty('shape') &&
               fruitName.hasOwnProperty('price')) {
                console.log('color: ' + fruitName.color);
                console.log('shape: ' + fruitName.shape);
                console.log('price: ' + fruitName.price);
               } else {
                   console.log('Your fruit does not have all properties');
               }
}


fruitProperties(banana);
fruitProperties(orange);
fruitProperties(shark);
