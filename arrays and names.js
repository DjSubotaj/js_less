'use strict';

const arr = [1,2,3,4,5,6,7]
console.log(arr)

arr.pop()
console.log(arr)

arr.push(10)
console.log(arr)
// we can`t use `continue` and `breack`
arr.forEach(function (item, num,arr) {
    console.log(`${num} : ${item} inside array ${arr}`);
})

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// we can use `continue` and `breack`
for (let value of arr) {
    console.log(value)
}