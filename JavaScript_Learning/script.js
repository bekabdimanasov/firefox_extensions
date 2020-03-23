
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
let arr = new Object({name: 'bek', surname: 'abdim'});
console.log(arr); 
