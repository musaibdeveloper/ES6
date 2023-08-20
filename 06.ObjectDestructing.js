// The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables. 

const person = {
    name: 'Musaib',
    age: 21,
    gender: 'male'    
}

let { name, age, gender } = person;

console.log(name); 
console.log(age); 
console.log(gender); 
// the order doesn't matter while in varaible.
// When destructuring objects, you should use the same name for the variable as the corresponding object key.


// If you want to assign different variable names for the object key, you can use.

const person = {
    name: 'musaib',
    age: 21,
    gender: 'male'    
}

// destructuring assignment
// using different variable names
let { name: name1, age: age1, gender:gender1 } = person;

console.log(name1); 
console.log(age1); 
console.log(gender1); 