// problem one 

const multi = (num1 , num2 , num3) => num1 * num2 * num3
console.log(multi(2,2,4));

// problem two // right a program which is take 3 line of code

const userInterface = `
    I am a Developer.
    I have to code.
    I eat Food.
`
console.log(userInterface);

// problem three

const sum = (x , y = 499) => {
    const mainBalance = `He give me ${x} and i give him ${y}`;
    return mainBalance;
}
console.log(sum(5));