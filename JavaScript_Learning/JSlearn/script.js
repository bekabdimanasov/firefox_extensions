
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
/*let set = new Set();

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
*/

//__________________________________________________________________________________________
/*Syntax Restructuring: Objects and Array.isArray

1. let {prop : varName = default, ...rest} = object;
2. let [item1: itemName = default, ...rest] = array;
*/

/*let user = {};
[user.name, user.age] = "Ilya Kantor".split(" ");
console.log(user);
*/
/*let title, width, hight;

({title, width, hight = 200} = {title: "Menu", width: 100});
console.log(hight)
console.log(title)*/

/*let option = {
	size: {
		width: 100,
		hight: 300
	},
	items: ["Cake", "Donut"],
	extra: true
};

let {
	size: {
		width,
		hight
	},
	items,
	title = "menu"
} = option;

console.log(title);
console.log(width);
console.log(items);
console.log(items.item1);
console.log(item2);*/

/*let options = {
	title: "My menu",
	items: ["MyPotate", "MyDomate"]
}

function showMenu({title: t = "Unti", width=100, hight=300, items:[item1, item2]}) {
	console.log(`${t} ${width} and ${hight}`);
	console.log(item1);
	console.log(item2);
}

showMenu(options);*/

/*let user = { name: "John", years: 30};
let {name, years, isAdmin=false} = user;
console.log(name);
console.log(years);
console.log(isAdmin);*/

/*let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 550
};

function topSalary(salariess) {
	let max = 0;
	let maxName = null;

	for (let [key, value] of Object.entries(salariess)) {
		if (max < value) {
			max = value;
			maxName = key;
		}
	}
	return maxName;
}

console.log(topSalary(salaries));*/

//__________________________________________________________________________________________
/*Syntax Date */

/*let now = new Date();
console.log(now); //Sun Mar 29 2020 12:58:46 GMT+0300 (Moscow Standard Time)*/


// new Date(milliseconds)

/*let start_Date = new Date();
console.log(start_Date.setHours(0, 0, 0, 0)); //1585429200000
let start_Date2 = new Date(24*60*60*1000);
console.log(start_Date2); //Fri Jan 02 1970 03:00:00 GMT+0300 (Moscow Standard Time)
let start_Date3 = new Date(-24*60*60*1000);
console.log(start_Date3) //Wed Dec 31 1969 03:00:00 GMT+0300 (Moscow Standard Time)*/

/*
let start = new Date();
for (let i = 0; i < 100000; i++) {
	let doSomething = i * i * i;
}
let end = new Date();
console.log(`For working ${end - start} milliseconds`);*/

/*function diffSubtract(d1, d2) {
	return d2 - d1;
}

function diffGetTime(dt1, dt2) {
	return dt2.getTime() - dt1.getTime();
}

function bench(fun) {
	let date1 = new Date(0);
	let date2 = new Date();

	let start = Date.now();
	for (let i = 0; i < 100000; i++) fun(date1, date2);
	return Date.now() - start;
}

let time1 = 0,
	time2 = 0;

bench(diffSubtract);
bench(diffGetTime);

for (let i = 0; i < 10; i ++) {
	time1 += bench(diffSubtract);
	time2 += bench(diffGetTime);
}
console.log("Time difference diffSubtract: " + time1 + ' milliseconds.');
console.log("Time difference diffGetTime: " + time2 + ' milliseconds.');*/

/*//execise 1
let datee = new Date(2012, 1, 20, 3, 12);
console.log(datee);*/

/*//execise 2
let date = new Date(2012, 0, 3);
function getLocalDay(dt) {
	let day = dt.getDay();
	if (day === 0) {
		day = 7;
	}

	return day;
}
console.log(getLocalDay(date));*/

/*//execise 3
let date = new Date(2015, 0, 2);
function getDateAgo(date, days) {
	let dateCopy = new Date(date);
	dateCopy.setDate(date.getDate() - days);
	return dateCopy.getDate();
}
console.log(getDateAgo(date, 10));*/

/*// execise 4
function getLastDayOfMonth(years, month) {
	let date = new Date(years, month + 1, 0);
	return date.getDate();
}
console.log(getLastDayOfMonth(2020, 1));*/

/*//execise 5 - 6
function getSecondsToday() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  let diff = tomorrow - now;
  return Math.round(diff / 1000); 
}
console.log( getSecondsToday() );*/

/*//execise 7
function formatDate(date) {

}*/

//__________________________________________________________________________________________
/*Syntax Format JSON, Method toJSON */

/*JSON поддерживает следующие типы данных:
1. Объекты { ... }
2. Массивы [ ... ]
3. Примитивы:
 - строки,
 - числа,
 - логические значения true/false,
 - null.*/

//JavaScript предоставляет методы:

//1) JSON.stringify для преобразования объектов в JSON.  SYNTAX - let json JSON.stringify(value[, replacer, space]);
/*let student = {
	name: 'John',
	age: 30,
	isAdmin: false,
	couses: ['html', 'css', 'js'],
	wife: null,
	sayHi() {  // function будет пропущено
		console.log('Hello');
	},
	[Symbol("id")]: 123, // Symbol будет пропущено
	something: undefined, // undefined будет пропущено
	room: {
    number: 23,
    participants: ["john", "ann"]
  }
};

let json = JSON.stringify(student);
console.log(typeof json);
console.log(json);*/


/*// - Ошибка: Преобразование цикличной структуры в JSON

let room = {
	number: 23
};
let meetup = {
	title: "Conference",
	participents: ["john", 'ann']
};

meetup.place = room;
let jsonMeetup = JSON.stringify(meetup);
console.log(jsonMeetup);

room.occupiedBy = meetup; //Ошибка: Преобразование цикличной структуры в JSON
let jsonRoom = JSON.stringify(room); 
console.log(jsonRoom);*/



//2) JSON.parse для преобразования JSON обратно в объект. SYNTAX - let value = JSON.parse(str, [reviver]);

/*let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3]}';
user = JSON.parse(user);
console.log(user.isAdmin);*/


/*let str = '{"title":"Conference","date":"2020-02-29T16:52:12.123Z"}';
let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date')  {
  	value = new Date(value);
  }
  return value;
});
console.log( meetup.date.getDate() ); // 30 - теперь работает!*/

/*//execise 1
let room = {
  number: 23
};
let meetup = {
  title: "Meeting",
  occupiedBy: [{name: "Ivanov"}, {name: "Petrov"}],
  place: room
};
// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
console.log( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));*/


//__________________________________________________________________________________________
/*Syntax RECURSION and STACK*/

// 1. Итеративный способ: цикл for:
/*function pow(x, n) {
	let result = 1;

	for (let i=0; i<n; i++) {
		result *= x;
	}
	return result;
}
console.log(pow(2, 8));*/

// 2. Рекурсивный способ: упрощение задачи и вызов функцией самой себя:
/*function pow(x, n) {
	return (n == 1) ? x : (x * pow(x, n-1));
}
console.log(pow(2, 3));*/


// Контекст выполнения, стек
/*let company = {
	sales: [{ name: "John", salary: 1000}, {name: "Alice", salary: 600}],
	development: {
		sites: [{name: "Peter", salary: 2000}, {name: "Alex", salary: 1800}],
		internals: [{name: "Jack", salary: 1300}]
	}
};

function sumSalaries(departmant) {
	if (Array.isArray(departmant)) {
		return departmant.reduce((prev, current) => prev + current.salary, 0);
	} else {
		let sum = 0;
		for (let subDepartmant of Object.values(departmant)) {
			sum += sumSalaries(subDepartmant);
		}
		return sum;
	}
}
console.log(sumSalaries(company));*/

/*
// Связанный список
// let arr = [obj1, obj2, obj3];

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};
OR
let list = {value: 1},
	list.next = {value: 2},
	list.next.next = {value: 3},
	list.next.next.next = {value: 4};


// Список можно легко разделить на несколько частей и впоследствии объединить обратно:
let secondList = list.next.next;
list.next.next = null;
// Для объединения:
list.next.next = secondList;*/


/*//execise 1
function sumTo(n) {
	return (n == 1) ? n : ( n + sumTo(n-1) );
}
console.log(sumTo(1));
console.log(sumTo(4));
console.log(sumTo(100));*/

/*// execise 2
function factorial(n) {
	return (n == 1) ? n : ( n * factorial(n - 1) );
}
console.log(factorial(5))*/

// execise 3

/*function fib(n) {
	return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(77))*/  // ВЫЧИСЛЯЕТСЯ ОЧЕНЬ ДОЛГО

/*function fib(n) {
	let a = 1,
		b = 1;
	for (let i = 3; i <= n; i++) {
		let c = a+b;
		a = b;
		b = c;
	}
	return b;
}
console.log(fib(770));*/


//__________________________________________________________________________________________
// Замыкание

/*let name = "John";
function sayHi() {
	console.log(`Hi, ${name}`);
}
name = 'Pete';
sayHi(); // Hi, Pete*/

/*function makeWorker() {
	let name = "John";
	return function() {
		console.log(name);
	}
}
let name = "Pete";
let work = makeWorker();
work(); // John*/



//Вложенные функции (CALLBACK Function)

/*function User(name) {
	this.sayHi = function() {
		console.log(name);
	};
}
let user = new User('John');
user.sayHi() //John*/

/*function makeCounter() {
	let count = 0;
	return function() {
		return count++;
	};
}
let counter1 = makeCounter();
let counter2 = makeCounter();
console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter2()); // 0 (независимо)*/


// Окружение в деталях


//__________________________________________________________________________________________
// Планирование: setTimeout и setInterval

// 1. setTimeout
// let timeId = setTimeout(func|cond, [delay], [arg1], [arg2], ...)

/*
function sayHi(phrase, who) {
    alert(phrase + ", " + who);
}
setTimeout(sayHi, 1500, "Hello", "John");*/

//setTimeout(() => alert("Hello"), 1000);


// 2. setInterval
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

/*
let timerId = setInterval(() => alert('tick'), 2000);
setTimeout(() => {clearInterval(timerId); alert("stop")}, 5000)*/

//__________________________________________________________________________________________
// Декораторы и переадресация вызова, сall/apply

/*
function slow(x) {
    alert(`Calling with ${x}`);
    return x;
}
function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return result;
    };
}
slow = cachingDecorator(slow);

alert(slow(1));
alert("Again: " + slow(1));

alert(slow(2));
alert("Again: " + slow(2));*/


// Применение «func.call» для передачи контекста.
// func.call(context, arg1, arg2, ...)

function say(phrase) { alert(this.name + ': ' + phrase); }
let user = { 
	name: "John" 
};
say.call(user, "Hello");

let a = {
	name: "bek"
}