const students = {
    name : 'noman',
    age : 21,
    home : 'Rangpur',
    isFFamily : true
}
const keys = Object.keys(students)
// it will return keys as a array
const values = Object.values(students)
// console.log(keys);
// console.log(values);

const pair = Object.entries(students)
// console.log(pair);
// array of array // is called be two dimensional array

// delete object entries

delete students.isFFamily;
console.log(students);

// how to added on object
