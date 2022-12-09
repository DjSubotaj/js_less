`use strict`;

let a = 5,
    b =2;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a : 5,
    b : 1
};

const  copy = obj; //link, not a new object

copy.a = 10;
console.log(obj);
console.log(copy);

//how create copy

function aCopy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a : 2,
    b: 3,
    c: {
        d: 4,
        w: 9
    }
};

const newNumbers = aCopy(numbers);

newNumbers.a = 10;

console.log(newNumbers)
console.log(numbers)

const add = {
    o: 14,
    sdf: 1653,
    we: {
        ds: 1748
    }
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);