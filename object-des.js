const actor = {
    name: "Abdullah Al Noman",
    age: 43,
    phone: "01318-969328",
    sub: "Math",
};

const { age, phone, sub, name } = actor;
console.log(age, phone);

// array destructuring

const numbers = [13, 3, 5, 6];
const [a, b] = numbers
console.log(a,b);

// they don't use property they only use key and value

function doubleThem (a, b){
    return [a*2, b*2];
}
const [num1 , num2] = doubleThem(4,5)
console.log(num1 , num2);

// swap method in array

const mainNumber = [12,21,32,7]
const [q,, x] = mainNumber // when you use (,,) they will skip next value and target next value/ index
console.log(q , x);


// practice object destructing
const mainObject = {
    name : 'Maisa Monoara Moule',
    age : 22,
    home : 'Barguna',
    love : 'no-one'
}
// destructing start
const {name : Maisa , age : i} = mainObject
console.log(Mais , i);