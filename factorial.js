// let factorial = 1; 
// for(let i = 1; i <= 8; i++){
//     console.log(factorial);
//     factorial = factorial * i;
// }
// console.log(factorial);


// function calculateFactorial(number){
//     let factorial = 1;
//     for(let i = 1; i <= number; i++){
//         factorial = factorial * i;
//         console.log(factorial);
//     }
//     return factorial;
// }

// const result = calculateFactorial(15);
// console.log(result);



function factorial(number){
    let fact = 1; 
    let i = 1;
    while(i <= number){
        fact = fact * i;
        i++;
    }
    return fact;
}

const result = factorial(6);
console.log(result);