// The spread operator is a new addition to the features available in the JavaScript ES6 version.
// Same like conact method.
// You can also use the spread syntax ... to copy the items into a single array. 

const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

console.log(arr2); 
//  Output:  ["one", "two", "three", "four", "five"]

// Spread just copy one time, once copied doesn't look for the updates.
