// normal function
// function declaration ()

function math ( num1 , number2){
    return num1 + number2
}

// function with variable

const addSum = function(a, b){
    return a + b;
}
console.log(addSum(2,4));

// using arrow function variable = () => {}

const newSum = (x, y) =>{
    return x + y
}
console.log(newSum(3,4));

//  if i need only one line in a function 

const avgSum = (maisa , monoara) => maisa + monoara ; // it also work for one line of code
console.log(avgSum(7,6));