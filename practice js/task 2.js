//  array length then print only even length name
let friends = ['Noman', 'Abdulla', 'mn']
const lengthSize = (array) => {
    let arr = [];
    for (const friend of friends) {
        if(friend.length % 2 === 0){
            arr.push(friend)
        }else{
            console.log('object');
        }
    }
    return arr;
}
console.log(lengthSize(friends));