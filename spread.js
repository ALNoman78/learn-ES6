const numbers = [12, 34, 56, 23, 12];
console.log(numbers);
console.log(...numbers); // (...) remove all data type / array / object
const maxNumber = Math.max(...numbers);
console.log(maxNumber);

// large number

const friends = [32, 54, 6, 2, 65, 12, 4];
// console.log(friends);
const newFriends = friends // friends a push na korar poreo ekhne push hosche because of their was an array which is declare by newFriends 
// newFriends reference will be (friends) which is called by main array
newFriends.push(77) // push method will be use for friends array this is added by 77
console.log(newFriends);


// advance spread operator 

const maths = [213,23,43,5423,4,1]
const newMaths = [...maths, 9999];
// const spreadOp = ;
const noman = Math.max(...newMaths)
console.log(noman);
// console.log(...newMaths);