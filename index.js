//Question 1-what are objects in javascript?
//solution-
//objects are  essential data types  are  collection of pairs of keys and values .keys are strings and values are any data types like any arrays ,objects or functions.
//for example-
// var user = {
//   name :"Arpita",
//   profession:"web developer",
//   hobbies :["Reading","Dancing"]
//}

//Question 2- what are functions?
//solution-
// functions are blocks of code that execute a specific task.functions can take input as parameters and perfoems a specific task and returns result.
//  function Add_numbers(a,b) {
//     const sum =  a + b;
//     console.log(sum);
    
    
//  }

//  Add_numbers(8,9);

//Question 3 - what is an event loop and callstack.
// solution -
// The call stack is a stack data structure that keeps track of the execution context of all the functions that are called in  program. In other words, it stores information about what functions are currently being executed.
// How the Call Stack Works:
// When a function is invoked, a new "execution context" is created for that function and placed onto the top of the stack.
// When the function finishes executing, its execution context is popped off the stack, and control is returned to the function that was executing before it.

//Question 4 - what is the DOM?


//Question 5- Difference between undefined vs not defined vs NaN ?

// solution-
//not defined = this results  in a referenceError when trying to access a variable that hasn't been declared at all.
//    for example = console.log(b); where 'b' is not declared will throw an error stating that 'b is not defined'. 
 
//   undefined   = This occurs when a variable has been declared but not assigned a value.
//    for example - var a;
//                 console.log(a);    output = undefined

//     NaN   = NaN is stands for Not-a-Number 
//      it is a special value used to represent the result of operations that dont yield a valid number
//  for example - 1- Divide 0/0 gives NaN(NOT A NUMBER) output
//                2- performing mathematical function on invalid input i.e square root of a negative number.

//Question 6- what are arrow functions?
//Arrow functions in JavaScript, introduced in ES6 (ECMAScript 2015), are a shorter and more concise way to write functions. They provide a cleaner syntax and behave slightly differently than traditional function expressions, especially in how they handle the this keyword.
// const functionName = (param1, param2) => {
//     // Function body
// };
// Instead of using function, we use an arrow (=>) to separate parameters and the function body.
// Concise: The function can have a shorter, more readable syntax.

//Question 7 - what is the for-in loop in javascript?Give its syntax ?
//solution- In JavaScript, a for-in loop is used to iterate over the enumerable properties  of an object or the indices of an array.
// When used with an object, the for-in loop iterates over the object's property names.
// When used with an array, it iterates over the array's indices, but not the actual array values.
// for (let variable in object) {
//     // code block to be executed
// }

//Question 8- Explain local scope,Block scope, Functional scope and Scope chain in javascript? 
//solution-
// local scope - Local scope refers to variables that are defined within a specific context (such as a function or a block) and are only accessible inside that context.
//for example - function example() {
//     let x = 10; // Local variable inside the function
//     console.log(x); // Accessible here
// //}

// example();
// console.log(x); // Error: x is not defined outside the function

//Functional Scope -If a variable is declared inside a function, it is only accessible within that function.
// function test() {
//     var a = 5; // Function-scoped variable
//     if (true) {
//         var b = 10; // This will be scoped to the entire function, not just the if block
//     }
//     console.log(a, b); // Works fine, b is available here
// }

// test();
// console.log(b); // Error: b is not defined outside the function

//Block  Scope: Block scope refers to variables that are declared inside a block (e.g., inside {}) and are only accessible within that block. Variables declared using let and const are block-scoped, unlike var, which is function-scoped.
//chain scope : The scope chain is essentially a hierarchy of scopes that JavaScript uses to look up variables. When you access a variable, JavaScript looks at the current scope, then moves outward to the outer scopes, and eventually reaches the global scope if necessary.

//Question 9 -what is difference between null and undefined and where to use what ?
//solution -
// null -
// Represents the intentional absence of any object value.
// It is an assignment value. we can assign null to a variable to explicitly indicate that it has no value.
// It is of type object.

//undefined -
//Represents a variable that has been declared, but has not yet been assigned any value.
// It is the default value of uninitialized variables, function arguments that are not passed a value, and properties that do not exist in an object.
// It is of type undefined.

//Question 10 - write code to explain map and filter in arrays .
//In JavaScript, map() and filter() are array methods that allow you to manipulate and transform arrays in different ways.
//Map() - The map() method creates a new array by applying a provided function to each element in the original array. It does not modify the original array.
//const newArray = arr.map(callback(element, index, array));
//callback: A function that will be called on each element in the array. It takes three arguments:
// element: The current element in the array.
// index : The index of the current element.
// array : The original array that map() was called on.
// The result of map() is always a new array of the same length as the original array, with each element being the result of the callback function.
//const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8, 10]

//filter - The filter() method creates a new array with all elements that pass a given test (provided as a function). It does not modify the original array.
//syntax - const newArray = arr.filter(callback(element, index, array));
// example - const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); // [2, 4]

//Difference between map() and filter()
//map() transforms each element in the array.
// filter() selects elements that meet a certain condition (and removes those that don't).

// Use Cases:
// Use map() when you need to apply a transformation to every element of the array.
// Use filter() when you need to extract a subset of elements based on a condition.

//Question 11 -Given an array of 0's and 1's find out number of 0's.
// let arr = [0 ,1 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,0];
// let countZeros = 0;
// let countOnes = 0;

// let num = 0;
// for (let index = 0; index < arr.length; index++) {
//     if (num === 0) {
//         countZeros++;
        
//     } else {(num ===1)
//         countOnes++;
        
//     }
// }
// console.log("Number of Zeroes :",countZeros);
// console.log("Number of Ones :", countOnes);

//Question 12 -Given an array find out total no. of odd and even nos.
//arr = [1, 5, 6 ,3 ,9,7 ,2,5]
// let arr = [1 ,5 ,6 ,3 ,9 ,7 ,2 ,5];
// let oddNum = 0;
// let evenNum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         evenNum++;
// } else { oddNum++;
        
//     }
    
// }
// console.log("total even number:",evenNum);
// console.log("total odd  number:",oddNum);

//Question 13 -Given a string find out number of vowels.
//solution -
//let name = "Arpita Nayak";
//  let count = 0;
//  const vowel = "AIOUEaioue";
//  for (let i = 0; i < name.length; i++) {
//     for (let j = 0 ;j < vowel.length; j++) {
// if (name[i] === vowel[j]) {
//     count++;
// }
    
// }        
//     }
//     console.log("number of vowels:", count);








    
