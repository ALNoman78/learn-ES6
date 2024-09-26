const students = {
    name : 'noman',
    friendName : 'NOman',
    className : 'NOMAN',
    homeDistrict : 'Rangpur',
    isTrue : true,
}
console.log(students);
const {name, homeDistrict , isTrue} = students
// console.log(name, homeDistrict, isTrue);

const keys = Object.keys(students);
for(const key of keys){
    // console.log(key);
}
const values = Object.values(students);
for(const value of values){
    console.log(value);
}
// console.log(keys , values);

const entries = Object.entries(students)
// console.log(entries);

delete students.name
console.log(students);