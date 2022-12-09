for (let i = 5; i <11; i++) {
    console.log(i);
}
console.log('first')

for (let j = 20; j > 9; j--) {
    console.log(j);
    if (j === 13) {
        break;
    }
}
console.log('second')

for (let k = 1; k < 11; k++) {
    if (k%2 != 0) {
        continue;
    } else {
        console.log(k);
    }
} // return odd numbers
console.log('third')

let i = 2;
while (i < 17){
    if (i%2 === 0) {
        console.log(i)
    }
    i++;
} //return odd numbers from 2 till 16
console.log('fourth')

const array = [5,6,7,8,9,10];
console.log(array) //must be 6
console.log('fifth')

//2---------------------------
const arr = [3, 5, 8, 16, 20, 23, 50];
const resu = [].concat(arr);
console.log(arr);
console.log(resu);
console.log(arr === resu, 'first 2 - done')

const data = [5, 10, 'Shopping', 20, 'Homework'];
const resul = [];
let elementNumber = 0;

while (data.length != resul.length) {
    if (typeof data[elementNumber] === "string") {
        data[elementNumber] = resul.push(data[elementNumber] + ' - done');
    } else {
        data[elementNumber] = resul.push(data[elementNumber]*2);
    }
    elementNumber++;
}

console.log(resul);


const date = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < date.length; i++) {
    if (typeof date[i] === "string"){
        date[i] += ' - done';
    } else {
        date[i] += date[i]
    }
}

console.log(date)
//3-------------------
console.log('     *\n    ***\n   *****\n  *******\n *********\n***********\n')
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

//4-------------------
function getMathResult(a,b) {
    let res = a;
    let h = a;
    if (b > 1) {
        for (let p = b; p > 1; p--) {
            h *= a;
            res += `---${h}`;
        }
    }
    console.log(res);
}
getMathResult(5,3);

function returnNeighboringNumbers(num) {
    console.log( [num-1, num, num+1]);
}

returnNeighboringNumbers(4)

function calculateVolumeAndArea(a) {
    if (a < 0 || Math.floor(a)!=a) {
        console.log("При вычислении произошла ошибка");
    } else {
        console.log(`Объем куба: ${a*a*a}, площадь всей поверхности: ${6*a*a}`);
    }
}

calculateVolumeAndArea(5);

calculateVolumeAndArea(15);

calculateVolumeAndArea(15.5);
0
calculateVolumeAndArea('15');

calculateVolumeAndArea(-15);




function findMaxNumber(a,b,c,d) {
    if (typeof (a || b || c || d) != 'number' || a < 4 || b < 4 || c < 4 || d < 4) {
        console.log(0);
    } else {
        console.log(Math.max(a,b,c,d));
    }
}

findMaxNumber(7.7,5,6,7)



function fib(n) {
    a = 0
    b = 1
    str  = `${a}${b}`
    if (n < 1) {
        return 'error'
    } else {
        while (n > 0) {
        s = a+b;
        a = b;
        b = s;
        str += `${s}`;
        n--;
        }
    res = str.slice(0,-2);
    console.log(typeof(res))
    }
}

fib(6)