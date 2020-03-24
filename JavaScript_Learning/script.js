
"use strict"
// || (or) %% (and) ! (not)

/*
let admin = prompt('Who\'s there?', '');
if (admin == 'boss') {
	let password = prompt('Please password?', '');
	if (password == 'ok') {
		alert('Hi');
	}else if (password == '' || password == null) {
		alert('cancel');
	}
	else {alert('password wrong');}
} else if (admin == '' || password == null) {
	alert('cancel');
}else {alert('I don\'n know you');}
_________________________________________________________________
*/

//   while and for
/*
______________
while(condition) {
	code block
}
______________
do {
	code block
} while (condition)
______________
for (begin statement; condition; step-finish statement) {
	code block
}
*/
/*

____________________________________________________________________________________
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

	for (let j = 2; j<i; j++) {
		if (i%j==0) continue nextPrime;
	}

	alert(i);
}
*/
//____________________________________________________________________________________

// switch
/*
switch(x) {
	case 'value1':  // if (x === 'value1')
		....
		break;
	case 'value2':  // if (x === 'value2')
		....
		break;

	default:
		....
		break;
}
*/
//______________________________________________________________

// function
// Function Declaration (Объявление Функции)

/*
function nameFunstion(parameters){
	code block;
}

nameFunstion(parameters);
*/
//___________________________________
// function
// Function Expression (Функциональное Выражение)
/*
let nameFunstion = function() {
	code block;
};
*/

//__________________________________
// function
// Arrow Functions (Стрелочные Функции)
/*
let nameFunction = (arg1, arg2, ...argN) => expression;

let nameFunction = (arg1, arg2, ...argN) => {body};
*/
/*
let sum = (a, b) => {
	let result = a + b;
	return result;
};
*/
/*
// выражение в правой части
let sum = (a, b) => a + b;

// многострочный код в фигурных скобках { ... }, здесь нужен return:
let sum = (a, b) => {
  // ...
  return a + b;
}

// без аргументов
let sayHi = () => alert("Привет");

// с одним аргументом
let double = n => n * 2;
*/


//______________________________________________________________

// Symbol
/*
Создаём новый символ - id с описанием (именем) "id"
let id = Symbol("id");
 */

//______________________________________________________________
// Методы объекта, "this"
/*
let user = {

};
function sayHi() {
    console.log("HI!");
};

user.sayHII = sayHi;
user.sayHII();
*/
// ________

/*
console.log( parseInt('100px'));
console.log( parseInt('px100'));

console.log( parseFloat('12.3em')); //12.3
console.log( parseFloat('em12.3')); //12.3
*/

/*
console.log( Math.random());
console.log( Math.random(10));*/

/*
let name = 'John';
function sayHi() {
    let name = 'bek';
    return this.name;
}
console.log(sayHi());*/

//______________________________________________________________________________________________________
// METHODS OF ARRAY

// arr.splice(index[start, deleteCount, elem1, ..., elemN])
/*
let arr = ["i", 'go', 'home'];
arr.splice(1, 50);
console.log(arr);*/

// arr.slice([start], [end])
/*
let arr = ['t', 'e', 's', 't'];
console.log( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
console.log( arr.slice(-2) ); // s,t (копирует с -2 до конца)*/

// arr.concat(arg1, arg2...)
/*
let arr = [1, 2];
console.log( arr.concat([3, 4]) ); // 1,2,3,4,5,6
console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6*/
/*
let arr = [1,2];
let arrayLike = {
    0: "what happen",
    length: 1
};
console.log( arr.concat(arrayLike) ); // 1,2,[object Object]*/

// arr.forEach(function(item, index, array) {
//  code block item});
/*
let arr = ["Bilbo", "Gfndalf", "Nazgul"];
arr.forEach((item, index, array) => {
    console.log(`${item} имеет позицию ${index} в ${array}`);
});*/

// arr.indexOf(item, from)
// arr.lastIndexOf(item, from)
// arr.includes(item, from)
/*
let arr = [1, 0, false, 'bek', undefined];
console.log( arr.indexOf(0) );
console.log( arr.lastIndexOf(false) );
console.log( arr.includes(undefined) );*/

// FIND and FILTER
/*
let users = [
    {id: 1, name: "Vasya"},
    {id: 2, name: "Petya"},
    {id: 3, name: "Masha"}
];
let  user = users.find(item => item.id == 1);
console.log(user.name); // Vasya*/
/*
let users = [
    {id: 1, name: "Vasya"},
    {id: 2, name: "Petya"},
    {id: 3, name: "Masha"}
];
let  user = users.filter(item => item.id < 3);
console.log(user.length); // 2*/

// MAP
/*
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6*/


/*
Для добавления/удаления элементов:
    - push (...items) – добавляет элементы в конец,
    - pop() – извлекает элемент с конца,
    - shift() – извлекает элемент с начала,
    - unshift(...items) – добавляет элементы в начало.
- splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
- slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
- concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.

    Для поиска среди элементов:
- indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
- includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
- find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
-  findIndex похож на find, но возвращает индекс вместо значения.

    Для перебора элементов:
- forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.

    Для преобразования массива:
- map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
- sort(func) – сортирует массив «на месте», а потом возвращает его.
- reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
- split/join – преобразует строку в массив и обратно.
- reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
    Дополнительно:
- Array.isArray(arr) проверяет, является ли arr массивом.*/

//______________________________________________________________________________________________________


//MAP and SET
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
console.log((set.size)); // 3

for (let user of set) {
    console.log((user.name)); // John (потом Pete и Mary)
}
