'use strict';

function first() {
    // do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

first();

function second() {
    console.log(2)
}

second();

function learnJS(lang, callback) {
    console.log(`I'm learning: ${lang}`);
    callback();
}

// learnJS(`JS`, function() {
//     console.log(`I pass this lesson`)
// });

function done() {
    console.log(`I'm pass this lesson`)
}

learnJS('JS', done);