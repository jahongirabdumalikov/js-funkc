// function sumArray(numbers) {
//     let sum = 0; 
//     for (let number of numbers) {
//         sum += number; 
//     }
//     return sum;
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let result = sumArray(numbers);
// console.log(result); 


// ///////////////  2  ///////////////////


// function numberToString(num) {
//     return num.toString(); 
// }

// let number = 256;
// let result = numberToString(number);
// console.log(result); 


// //////////////  3  //////////////////


// function toNegative(num) {
//     return num > 0 ? -num : num; 
// }
// console.log(toNegative(7)); 
// console.log(toNegative(-8)); 


// //////////////  4  //////////////////


// function sumPositiveNumbers(numbers) {
//     let sum = 0; 
//     for (let number of numbers) {
//         if (number > 0) { 
//             sum += number; 
//         }
//     }
//     return sum;
// }
// let numbers = [1, 2, -3, 4, 5, -6, -7];
// let result = sumPositiveNumbers(numbers);
// console.log(result); 


// //////////////  5  //////////////////


// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         return "Juft son"; 
//     } else {
//         return "Toq son";
//     }
// }
// console.log(checkEvenOdd(5));
// console.log(checkEvenOdd(6)); 



// //////////////  6  //////////////


// function getOpposite(num) {
//     return -num;
// }
// console.log(getOpposite(9)); 
// console.log(getOpposite(-9)); 


// /////////////  7  //////////////////


// function countTrueValues(arr) {
//     let count = 0; 
//     for (let value of arr) {
//         if (value === true) { 
//             count++; 
//         }
//     }
//     return count; 
// }
// let array = [true, 1, true];
// let result = countTrueValues(array);
// console.log(result); 


// /////////////  8  //////////////////


// function findMinMax(arr) {
//     let max = Math.max(...arr);
//     let min = Math.min(...arr); 
//     return `Eng katta - ${max}, eng kichik - ${min}`;
// }
// let array = [2, 5, 9, 4];
// let result = findMinMax(array);
// console.log(result); 



// ///////////////  9  //////////////////


// function booleanToString(bool) {
//     return bool ? 'Yes' : 'No'; 
// }
// console.log(booleanToString(true));
// console.log(booleanToString(false));


// ////////////////  10  ////////////////


// function toUpperCase(str) {
//     return str.toUpperCase(); 
// }
// let inputString = "Salom qalesan";
// let result = toUpperCase(inputString);
// console.log(result);


// ////////////////  11  ////////////////


// function sumFromOneToN(n) {
//     let sum = 0; 
//     for (let i = 1; i <= n; i++) {
//         sum += i; 
//     }
//     return sum; 
// }
// let n = 5;
// let result = sumFromOneToN(n);
// console.log(result); 


// ///////////////  12  /////////////


// function reverseString(str) {
//     return str.split('').reverse().join(''); 
// }
// let inputString = "QWERTY";
// let result = reverseString(inputString);
// console.log(result); 
