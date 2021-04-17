/*
Оператор несторого равенства == приводит операнды к числу, поэтому 0 == false будет true
В свою очередь, оператор строгого равенства === не пытается привести операнды к чему-либо и сравнивает "как есть"
 */

/*let symbol = Symbol("id");

let obj = {
    name: "someName",
    count: 5,
    number: Math.random(),
    [symbol]: 1,
    /!*toString() {
        return `Standard Object with properties: 
        name: ${this.name},
        count: ${this.count},
        number: ${this.number}
        and a Symbol: ${this[symbol]}`;
    },*!/
    logMe: function () {
        console.log(this);
    },
    anotherLogic() {
        return this.number * 10;
    },
    [Symbol.toPrimitive](hint) {
        console.log(hint);
        return hint === "string" ? `the object name is: ${this.name}` : this.count;
    }
};

/!*alert(obj);
console.log(obj - 1);
obj.logMe();
let myNum = obj.anotherLogic();
console.log(myNum);*!/
/!*obj.logMe();

let anotherLogicCode = obj.anotherLogic();
console.log(anotherLogicCode);*!/

let number = 123.123123;
let newNumber = number.toFixed(1);
console.log(newNumber);*/

/*'use strict';

let str = "myString";
str.test = 12345; //создается объект-обертка, значение присваивается свойству,
// но потом объект уничтожается (свойство тоже)
console.log(str.test);*/

//Numbers
//'e' используется с numbers для замены нулей. Какое число после 'e' - столько нулей подразумевается
//'e' производит операцию умножения числа на 1 с указанным количеством нулей:
// 2 * 1000000000 в примере ниже
/*let max = 2e9;
console.log(max); //2000000000

//аналогично, но тут 'e' делится на 1 с указанным количеством нулей
let min = 2e-6;
console.log(min); //0.000002

let newNum = +("12345");
console.log(newNum);
console.log(typeof newNum);

console.log(0.1 + 0.2); //0.30000000000000004
// alert(0.1.toFixed(20));
// alert(123..toFixed(10));

let aLilNumber = +(0.1 + 0.2);
// alert(+aLilNumber.toFixed(2));

let myOwn = {
    name: "myOwnName",
    saySomething: function (string) {
        console.log(string);
    }
};

myOwn.saySomething("kek");

let functionBody = myOwn.saySomething;
console.log(functionBody);

function theHolyFunctionCanDoEverything() {
    console.log("Truly!");
}

theHolyFunctionCanDoEverything();*/

/*let array = [
    "123",
    "321",
    "881"
];

let newArray = [];

array.forEach(value => newArray.push(value++));

console.log(array);
console.log(newArray);

console.log(1234567890);*/

/*let number = "qwe";

console.log(isFinite(number, ""));

//читают строку посимвольно и, если в строке встречаются числа, "собирают" их и возвращают. остальные символы отбрасываются
//останаваливаются на первом же Не числе
console.log(parseInt("12qwerty")); //12
console.log(parseFloat("12.123qwerty")); //12.123*/

/*function sumFromPrompt() {
    let first = +prompt("First", '0');
    let second = +prompt("Second", '0');
    return first + second;
}


let sum = sumFromPrompt();
console.log(sum);*/

/*Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

    Функция должна возвращать числовое значение.

    Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.*/

/*function readNumber() {
    let number = prompt("Введите число, охохо", '');

    if (number === '' || number === null) {
        return null;
    } else if (isFinite(number)) {
        return number;
    } else {
        readNumber();
    }

    //OR
    /!*let anotherNumber;

    do {
        anotherNumber = prompt("Введите число, охохо", '');
    } while (!isFinite(number))

    if (anotherNumber === '' || anotherNumber === null) return null;

    return +anotherNumber*!/
}

let value = readNumber();
console.log(value);*/

//че-т жопа)))
/*function random(min, max) {
    return min + Math.random() * (max - min);
}


let value = random(1, 5);
console.log(value);*/

//Strings
let str = "kelamoke";
/*
let newStr = "";
/!*let char = str[str.length - 1];
console.log(char);*!/

for (const char of str) {
    /!*newStr += char;
    console.log(newStr);*!/
    newStr = char + newStr;
}

console.log(newStr);
*/

console.log(str.indexOf("ke"));
console.log(str.lastIndexOf("ke"));
console.log(str.includes("lamoke"))
let slicedStr = str.slice(0, 4)
/*let finalStr = str.concat(slicedStr);
console.log(finalStr)*/
let newSuperStr = str.replace(slicedStr, '');
console.log(newSuperStr)





