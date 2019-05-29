'use strick';

//переменные
var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

//типы данных
var number = 5;
var string = "Boris";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log("string"*1);

let something;
console.log(something);

let person = {
    name: "Boris",
    age: 15,
    isMarried: false
};

console.log(person.name);
console.log(person["isMarried"]); 

let arr = ["plum.png", "orange.jpg", "apple.bmp"];

console.log(arr[0]);

// общение с пользователем

// alert("Hello, World!");

// let answer = confirm("Are you here?");
// console.log(answer);

// let answer = prompt("Есть ли вам 10?", "Да"); //-string
// console.log(answer);
// console.log( typeof(answer) ) ;

// let answer1 = +prompt("Есть ли вам 10?", "Да"); //-number
// console.log(answer1);
// console.log( typeof(answer1) ) ;

// console.log(4 + +"-object")

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log("2" == 2);
console.log("2" === 2);

let isChecked = true,
    isClosed = true;

console.log(isChecked && isClosed); // - and
console.log(isChecked || isClosed); // - or