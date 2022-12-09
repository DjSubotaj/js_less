'use strict';

let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num <50);
console.log('this one')
for (let i = 1; i < 8; i++) {
    if (i === 6){
        break; // 'continue' - pass 6 and write
    }
    console.log(i);
}

//----------------------
let res = '';
const len = 7;
for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
        res += "*";
    }
    res += '\n';
}

console.log(res);


//------------------------
first: for (let i = 0; i < 3; i++) {
    console.log(`First lvl: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second lvl: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break       first;
            console.log(`Third lvl: ${k}`);
        }
    }
}