// Function expects parameters;
// We give function arguments;

// const result = sum(100);

// function sum(a, b = 0) {
//     // if any of the parameters above is not supplied the default value will be 0;
//     return a + b;
// }

// Hoisting - applies to function and var keyword declarations;

// const max = Math.max(1, 2, 34, 5, 634, 2355, 3252, 5235, 325, 24, 234234, 32424);

// function myFunc() {
//     // arguments is an ArrayLike element
//     const customArguments = Array.from(arguments);
//     for (let i = 0; i < customArguments.length; i++) {
//         console.log(customArguments[i]);
//     }
//     console.log(arguments);
//     console.log(customArguments);
// }

// myFunc(12, 34, 54, 100, 150);


// function findMin() {
//     console.log(arguments);
//     const argumentsAsArray = Array.from(arguments);
//     let minimum = argumentsAsArray[0];

//     for (let i = 1; i < argumentsAsArray.length; i++) {
//         if (argumentsAsArray[i] < minimum) {
//             minimum = argumentsAsArray[i];
//         }
//     }

//     return minimum;
// }

// const result = findMin(12, 34, 0, 100, -100, 50, 300);
// const result2 = Math.min(12, 34, 0, 100, -100, 50, 300);
// console.log(result2);

// ARROW FUNCTIONS 
// function func1() {
//     // function body
// }

// func1()

// const func = (a, b, c) => {
//     // function body
//     return a + b + c;
// }

// const func2 = (a, b, c) => a + b + c;

// const func3 = a => a + 10;

// const func4 = (firstname) => {
//     return {
//         firstname: firstname
//     };
// }

// const func5 = firstname => ({ firstname });

// func();
// console.log(func2(1, 2, 3));

// console.log(func3(1000));

// console.log(func5('Samir'));

/*
    DIFFERENCES BETWEEN ARROW FUNCTIONS AND FUNCTION DECLARATION
    1. arguments keyword can not be accessed from arrow functions;
    2. arrow functions can not be accessed before they are declared (because of const and let)
    3. `this` keyword: arrow functions do not have `this` keyword, `this` always is `window` object;
*/

// findMin();

// const findMin = () => {
//     console.log(arguments, 'from find min 1');
// }


// findMin2();

// function findMin2() {
//     console.log(arguments, 'from find min 2');
// }

// const user = {
//     firstname: 'Agil',
//     lastname: 'Atakishiyev',
//     getName: function () {
//         console.log(this);
//         return this.firstname + " " + this.lastname;
//     },
//     getNameWithArrowFunction: () => {
//         console.log(this)
//         return this.firstname + " " + this.lastname;
//     }
// }

// user.getName();
// user.getNameWithArrowFunction();

// IIFE - Immediately Invoked Function Expression;

// function myFunc() {
//     firstname = 'Samir';
// }

// myFunc();

// (function (a) {
//     var firstname = 'Agil';
//     console.log(firstname);
//     console.log('hello world');
//     console.log(a);
// })(100);

// var firstname = 'Samir';
// console.log(firstname);


// ((b) => {
//     console.log('salam dunya');
//     console.log(b);
// })(150);

/*
    var - function scoped;
    let & const - block scoped & function scoped
*/

// if() {

// }

// for (let i = 0; i < 100; i++) {

// }

// for (var j = 0; j < 100; j++) {

// }

// function myFunc() {
//     let someVariableWithLet = 0;
//     var someVariableWithVar = 0;
// }

// console.log(someVariableWithLet);
// console.log(someVariableWithVar);

// console.log(j);

