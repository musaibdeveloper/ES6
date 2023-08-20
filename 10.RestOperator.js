// When the spread operator is used as a parameter, it is known as the rest parameter.

let func = function(...args) {
    console.log(args);
}

func(545) // [545]

// Using the rest parameter will pass the arguments as array elements.

// You can also pass multiple arguments to a function using the spread operator.

function sum(x, y ,z) {
    console.log(x + y + z);
}

const num1 = [1, 3, 4, 5];

sum(...num1); // 8

// If you pass multiple arguments using the spread operator, 
// the function takes the required arguments and ignores the rest.

