// problem 6

const arr = [12,34,654,65,44]
const arr1 = [21,436,3,6,23,64,4,999]
const maxValue = (array, array2) => {
    const x = array
    const y = array2
    const maxNumber = Math.max(...array , ...array2)
    return maxNumber
}
console.log(maxValue(arr, arr1));