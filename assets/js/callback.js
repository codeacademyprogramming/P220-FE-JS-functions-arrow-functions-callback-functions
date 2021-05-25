function multiplyArrayElementsWithTwo(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 2);
    }
    return result;
}

function sumArrayElementsWithFive(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + 5);
    }
    return result;
}

function multiplyArrayElementsWithFive(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 5);
    }
    return result;
}

// console.log(multiplyArrayElementsWithTwo([1, 2, 3, 4, 5]));
// console.log(sumArrayElementsWithFive([1, 2, 3, 4, 5]));
// console.log(multiplyArrayElementsWithFive([1, 2, 3, 4, 5]));


function loopThroughArrayAndDoSomething(array, cb) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const operationResult = cb(array[i]);
        result.push(operationResult);
    }
    return result;
}

function multiplyByFive(number) {
    return number * 5;
}

function multiplyByTwo(number) {
    return number * 2;
}

// function divideByTwo(number) {
//     return number / 2;
// }

loopThroughArrayAndDoSomething([1, 2, 3, 4, 5], multiplyByFive);
loopThroughArrayAndDoSomething([2, 5, 150, 200, 10], multiplyByFive);


loopThroughArrayAndDoSomething([2, 5, 150, 200, 10], function (number) {
    return number * 5;
});

loopThroughArrayAndDoSomething([1, 2, 3, 4, 5], (number) => {
    return number / 2;
});

loopThroughArrayAndDoSomething([1, 2, 3, 4, 5], number => {
    return number / 2;
});


loopThroughArrayAndDoSomething([1, 2, 3, 4, 5], number => number / 2);

// console.log(loopThroughArrayAndDoSomething([1, 2, 3, 4, 5], multiplyByTwo));
// console.log(loopThroughArrayAndDoSomething([1, 2, 3, 4, 5], divideByTwo));

