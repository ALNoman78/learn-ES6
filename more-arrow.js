// that's use for bubble parameter

const getObject = (x , y) => x * y
console.log(getObject(2,4));

// that is use for single parameter / no parameter

const singleMeter = (person) => person.age
const obj = {name : 'Maisa Monoara Moule' , age : 22}
console.log(singleMeter(obj));

// array to arrow function

const arrowArrayfunction = (newArr) => newArr[2]
const array = [12,32,54,67]
console.log(arrowArrayfunction(array));

// no parameter  (empty parameter ) we need to use

const getPI = () => Math.PI
console.log(getPI());

// large arrow function 

const largeNumber = (x, y, z) => {
    const math = x + y + z;
    const Moule = x * y * z;
    const result = math + Moule
    return result;
}

console.log(largeNumber(10, 20, 30));