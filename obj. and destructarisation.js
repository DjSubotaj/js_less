'use strict';

const option = {
    name : 'test',
    width : 1040,
    height : 1040,
    colors : {
        back: "black",
        front : "orange"
    },
    makeTest: function () {
        console.log('test test')
    }
};

option.makeTest()


const {back, front} = option.colors;
console.log(back)

//can delete some element from the object by this way:

//delete option.name;
let count = 0;
for (let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Svojstvo ${i} imeet znachenie ${option[key][i]}`);
            count++;
        }
    } else {
        console.log(`Svojstvo ${key} imeet znachenie ${option[key]}`);
        count++;
    }
}
//It's how we can see length of the objects inside object
console.log(count)
console.log(Object.keys(option).length)

