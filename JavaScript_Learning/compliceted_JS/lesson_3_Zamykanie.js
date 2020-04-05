// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n);
//     }
// }
//
// const calc = createCalcFunction(42);
// calc();


/*
function createIncrementor(n) {
    return function (num) {
        return n + num;
    }
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(10));
console.log(addOne(41));

console.log(addTen(10));
console.log(addTen(41));*/

// ===============

/*function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const comUrl  = urlGenerator('com');
const ruUrl = urlGenerator('ru');

console.log(comUrl('google'));
console.log(comUrl('netflix'));

console.log(ruUrl('yandex'));
console.log(ruUrl('mail'));*/


/// ================= example 1 lesson ago


function bind(context, func) {
    return function (...args) {
        func.apply(context, args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: "Mihail", age: 22, job: 'Fronted'};
const person2 = {name: "Elena", age: 10, job: "SMM"};

bind(person1, logPerson)();
bind(person2, logPerson)();