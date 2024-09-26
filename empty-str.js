function emptyStr(num1, num2 = 1) {
    const result = num1 + num2;
    console.log(result);
    return result;
}
emptyStr(19);
// spread operator using

const arr1 = [12,43,65 , 999]
const arr2 = [3,54,23 ,0.1]

const mainNumber = (para1, para2) => {
    const maxNumber = Math.min(...para1, ...para2)
    return maxNumber
}

console.log(mainNumber(arr1,arr2));