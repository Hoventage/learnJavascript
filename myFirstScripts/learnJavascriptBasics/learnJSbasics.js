`use strict`;

//name enter request
/*
let name = prompt("Please enter ur name", "");
alert(name);*/

//bool to string
/*
let variable = true;
console.log(typeof variable);
variable = String(variable);
console.log(typeof variable);*/

//string to number
/*console.log(typeof ("6"/"3"));
let value = "iweyurtoipwyuerpoituwpeoirt";
let numValue = Number(value);

if (isNaN(numValue)){
    console.log("This is what a'm talking about");
} else {
    console.log("lol");
}*/

//Convert variables to numbers
/*
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b);*/

//strings comparison
/*
let firstLetter = "а";
let lastLetter = "я";

if (firstLetter < lastLetter) {
    console.log(firstLetter);
} else {
    console.log(lastLetter);
}
*/

//if statement
/*
let kokoko = "kokoko";
(kokoko === "kokoko") ? alert("ok") : alert("bullshit!");*/

/*let jsOfficialName = prompt("Какое \"официальное\" название JavaScript?", "");

if (jsOfficialName === "ECMAScript") {
    alert("Правильно!");
} else {
    alert("Не знаете? \"ECMAScript\"");
}*/

//let num = prompt("Введите число", "");

/*f (num > 0) {
    alert(1);
} else if (num < 0) {
    alert(-1);
} else {
    alert(0);
}*/

//(num > 0) ? alert(1) : num < 0 ? alert(-1) : alert(0);

/*
let result;
let a = +prompt("Введите число", "");
let b = +prompt("Введите число", "");


result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);*/

/*let message;

if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}*/

/*
let username = prompt("Введите логин", "");
let message;

message = (username === 'Сотрудник') ? 'Привет' : (username === 'Директор') ? 'Здравствуйте' : (username === '') ? 'Нет логина' : '';
alert(message);*/

//logic operators
//let age = 16;

/*if (age >= 14 && age <= 90) {
    alert(age);
}*/

/*if (!(age >= 14 && age <= 90)) {
    alert(age);
}*/

/*if (age < 14 || age > 90) {
    alert(age);
}*/

//
/*let whoIsThere = prompt("Кто там?", "");
let password;

if (whoIsThere === "Админ") {
    password = prompt("Пароль", "");

    if (password === "Я главный") {
        alert("Здравствуйте!");
    } else if (password === null || password === '') {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }

} else if (whoIsThere === null || whoIsThere === '') {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}*/


//?? operator
/*let someVar = (1 ?? 2) && 0.5; //&& вернет первое ложное значение, ИЛИ последнее
let someVar1 = (1 ?? 2) || 0.5; //|| вернет первое истинное значение, ИЛИ последнее
console.log(someVar);
console.log(someVar1);*/

//for and while/do-while cycles
/*let i = 3;
while (i) {
    alert(i--);
}*/

//do-while нужен, чтобы тело цикла выполлилось ХОТЯ БЫ ОДИН РАЗ, даже если условие в "while" ложно

/*let sum = 0;

while (true) {

    let value = +prompt("Введите число", '');

    if (!value) break; // (*)

    sum += value;

}
alert( 'Сумма: ' + sum );*/

/*const array = [];
let remainder;

for (let i = 0; i < 100; i++) {
    /!*if (!(i % 2)) {
        array.push(i);
        remainder = i % 2;
        console.log(remainder);
    }*!/

    if (i % 2) continue;
    array.push(i);

}
console.log(array);
console.log(array.length);*/

/*let i = 0;
const arrayPreffix = [];
const arrayPostfix = [];

while (++i < 5) {
    arrayPreffix.push(i);
}

let j = 0;

while (j++ < 5) {
    arrayPostfix.push(j);
}

console.log(`arrayPreffix contains ${arrayPreffix}`);
console.log(`arrayPostfix contains ${arrayPostfix}`);*/


/*for (let i = 0; i < 5; i++) { //0, 1, 2, 3, 4 -> даже если изменить постфиксный инкремент на префиксный
    alert(i);
}*/

/*for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0 && i !== 0) {
        alert(i);
    }
}*/

/*for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}

let j = 0;

while (j < 3) {
    alert(`number ${i}!`);
    j++;
}*/

/*let result;

do {
    result = +prompt("Введите число > 100!", '');
} while (result <= 100 || result == null)*/

/*let n = 10;

//не смог раскурить сразу
someMark:
for (let j = 2; j <= n; j++) {
    for (let k = 3; k < j; k++) {
        if (j % k === 0) continue someMark;
    }
    alert(j);
}*/

//switch case
/*let browser = prompt("Введите название браузера", '');
const browserNames = [
    'Chrome',
    'Firefox',
    'Safari',
    'Opera'
];


if (browser === "Edge") {
    alert("You've got the Edge!");
} else if (browserNames.includes(browser)) {
    alert('Okay we support these browsers too');
} else {
    alert( 'We hope that this page looks ok!' );
}*/

/*const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
    default:
        alert("Вот это поворот! Мы это не продумали :D");
}*/

//functions
/*function someFunc() {
    return "Вызвана функция-параметр по умолчанию :)";
}

function newFunc(lol, environment = someFunc()){
    alert(lol + " but " + environment + " is alive!");
}

newFunc("О, Боже!", "123");*/

/*function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}*/

//checkAge(17);

/*function checkAge1(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

checkAge1(1);*/

/*function min(a, b) {
    if (a > b) return b;
    if (b > a) return a;
}*/

/*function min(a, b) {
    return a > b ? b : a;
}

let minValue = min(-50, 10);
console.log(minValue);*/

/*function pow(a, b) {
    let result = a;

    if (b !== undefined && b !== null && b !== 0) {
        for (let i = 1; i < b; i++) {
            result *= a;
        }
    }
    return result;
}

console.log(pow(5, 2));*/

//Function Expression
/*function min(a, b) { //Function Declaration
    return a > b ? b : a;
}*/

/*
let minVariable = function (a, b) { //Function Expression
    return a > b ? b : a;
}

/!*alert(min);
alert(minVariable(1, 2));
alert(minVariable);*!/

let funcReturnedValue = min(1, 2); //кладем в переменную результат работы метода
let funcLogic = min; //кладем в переменную логику работы функции
alert(funcReturnedValue);
funcLogic(1, 2);*/

/*function test(a, b) { //Function Declaration
    alert(a + " + " + b);
}


function shouldDoSomething(number, min) {
    return min(number, "test");
}


shouldDoSomething(12, test);

let wtf = shouldDoSomething(
    12,
    function () {
        return 12345;
    }
);
alert(wtf);*/


/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert( "Вы согласны." );
}

function showCancel() {
    alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);*/


//arrow-functions
/*let arrowFunc = (a, b) => a + b;

console.log(arrowFunc(10, 20));

let arrowFuncWithBody = (a, b) => {
    return a + b;
};

console.log(arrowFuncWithBody(10, 30));*/

/*
function ask(question, yes, no) {
    if (confirm(question)) {
        yes(value);
    } else {
        no();
    }
}

/!*ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);*!/

let value = 100;

ask(
    "Вы согласны?",
    (value) => console.log(300 + value),
    () => alert("Используем другую логику и нам норм :)")
);*/

/*console.log("some string".concat(" wow!"));

const value = "value";*/

/*
let value = !!1;

console.log(value);*/

//let value = (alert("lol!"), console.log(")))"));

//alert( (10 + 10) );

/*function showPrimes(number) {
    someMark:
    for (let i = 2; i < number; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue someMark;
        }
        alert(i);
    }
}

showPrimes(5);*/

/*break; //выход из цикла
break markName; //выход из текущего цикла и переход к КОНЦУ цикла, помеченного меткой
continue; //переход к следующей итерации
continue markName; //переход к СЛЕДУЮЩЕЙ ИТЕРАЦИИ цикла, помеченного меткой*/

//пример JSDoc-комментариев. С их помощью описывается логика функций, смысловая нагрузка параметров
//и так далее
/**
 * Вернет массив простых чисел, входящих в первоначальное число
 * @param number - первоначальное число
 * @return array массив простых чисел
 */
function showPrimes(number) {
    const array = [];

    someMark:
        for (let i = 2; i < number; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j === 0) continue someMark;
            }
            alert(i);
            array.push(i);
        }
        return array;
}

/*let array = showPrimes(10);
console.log(array);*/










