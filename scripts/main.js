// String Manipulation Functions:

// 1. reverseString

function reverseString(str) {
    return str.split('').reverse().join('');
}


// console.log(reverseString("hello")); 


// 2. Count Characters

function countCharacters(str) {
    return str.length;
}


// console.log(countCharacters("JavaScript is awesome!")); 


// 3. Capitalize Words

function capitalizeWords(str) {

    
 let aboutme = prompt("enter About me");

 let  message =(aboutme.slice(0).toUpperCase() )
 console.log(message);
 

   
}

// capitalizeWords()




//Array Functions:

//1.  Find Maximum and Minimum:

const numbers = [2, 4, 6, 8, 10];
function findMinMax(numbers) {
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return [min, max];
}
// console.log(findMinMax(numbers));





// 2. Sum of Array


const numbArray = [2, 4, 6, 8, 10];
function sumArray() {
    let sum = 0;
   
    for (let i = 0; i < numbers.length; i++) {  
        sum += numbArray[i];
    }
    return sum;
}
// console.log(sumArray(numbArray));



// 3.Filter Array:


const number = [1, 2, 3, 4, 5, 6]

function filterArray(numbers) { 
    return numbers.filter(number => number % 2 === 0);
}
// console.log(filterArray(number));





// Mathematical Functions:


// 1. Factorial

function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) { 
        result *= i;
    }
    return result;
}
// console.log(factorial(5));


// 2. Prime Number Check


function isPrime(number) {
    if (number <= 1) {  
        return false;
    }   
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
// console.log(isPrime(5));


// 3.Fibonacci Sequence:


function fibonacci(number) {
    let a = 0;
    let b = 1;  
    let sum = 0;
    for (let i = 0; i < number; i++) {  
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
}
// console.log(fibonacci(5));