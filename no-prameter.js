function number (num1 , num2 = 0 ){ // num2 = 0 (initial value = 0 ) if i don't give any parameter
    const result = num1 + num2
    console.log(num1 , num2, result);
    return result; 
}
number (4);
number (2, 5)

// if i expect to my value as a array , i will give default value empty parameter

function emptyArray (number = []){

}
// same as object 

function objectDefault (number = {}){

}
// string er jnno 

function emptyStr (firstName , lastName = ''){
    
}