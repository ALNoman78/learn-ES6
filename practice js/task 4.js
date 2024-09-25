// problem five

const arr = [2, 4, 5, 6, 9];
const doubleNumber = (array) => {
    let sum = 0;
    for (const x of arr) {
        const square = x * x;
        // console.log(square);
        sum += square
        const avgNumber = sum / array.length
    }
    return sum/array.length;
}
console.log(doubleNumber(arr));