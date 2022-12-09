'use strict';

if (1) { // 1 == true
    console.log('ok');
} else {
    console.log('not ok')
}


const num = 50;
if (num <49) {
    console.log('false')
} else if (num > 50) {
    console.log('false')
} else {
    console.log('true')
}

(num === 50) ? console.log('ok') : console.log('no'); //ternar operator

const n = 36;

switch (n) {
    case 49:
        console.log('false');
        break;
    case 101:
        console.log("true");
        break;
    default:
        console.log('100 = 100')
}

console.log(n/4)