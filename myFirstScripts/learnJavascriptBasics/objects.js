'use strict';

/*let strangeFeature = "world";
strangeFeature = prompt("Го чекнем динамическую подстановку кея", "");
let additionalRandomProperty = prompt("Го чекнем динамическую подстановку кея", "");

const myOwnObject = {
    name: "Anton",
    'name name': "vot je lalka!",
    number: 12345,
    testFunc: function () {
        console.log(1234);
    },
    array: [1, 2, 3],
    [strangeFeature]: 100
};

let user = new Object(); //конструктор объекта
let user1 = {}; //литерал объекта || литеральная нотация
//console.log(myOwnObject.world); //в [] внутри объекта лежит <имя переменной>;
// это означает, что key здесь будет равен значению этой переменной!
// обращаемся на самом объекте к ЗНАЧЕНИЮ переменной и получаем value нашего проперти.
// полный абзац)
console.log(strangeFeature.valueOf());
console.log(myOwnObject[strangeFeature.valueOf()]);
myOwnObject[additionalRandomProperty] = 1000;
console.log(myOwnObject[additionalRandomProperty.valueOf()]);

console.log(myOwnObject);

delete myOwnObject.array;

let name = 'name name';

console.log(myOwnObject[name]);*/

/*function createCar(mark, color, size) {
    return {
        mark: mark,
        color: color,
        size: size
    }
}

let car = createCar("Toyota", "Blue", 100);
let doorsCount = "doorsCount";

car[doorsCount] = 3;
console.log(car);
console.log(car.noSuchProp);
console.log("mark" in car); //указываем имя проперти напрямую
console.log(doorsCount in car); //указываем имя переменной, значение которой является именем проперти
console.log(car["color"]);

for (let key in car) {
    console.log(key + " " + car[key]);
}*/

/*
let array = [
    1, 2, 3, 4, 5
];

let newArray = array.map(a => a + 1);

console.log(newArray);*/

/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);*/

/*function isEmpty(object) {
    let propArray = [];

    for (let prop in object) {
        propArray.push(prop);
    }

    if (propArray.length === 0) {
        return false;
    } else {
        return true;
    }
}

let user = {
    name: "Mark"
};

console.log(isEmpty(user));*/

/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function salariesSum(salaries) {
    let sum = 0;

    for (let salariesKey in salaries) {
        sum += salaries[salariesKey];
    }

    return sum;
}

let sum = salariesSum(salaries);

console.log(sum);*/

/*let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(object) {
    for (let objectKey in object) {
        if (typeof object[objectKey] == "number") {
            object[objectKey] *= 2;
        }
    }
}

//multiplyNumeric(menu);
console.log(menu);

console.log(menu.width); //просто вернет 200
let newProp = "newPropGuys";

menu[newProp] = 101;

console.log(menu.newPropGuys); //вернет 101
console.log(menu[newProp]); //вернет 101 )
console.log(menu[newProp.valueOf()]); // 101*/

/*const _ = require('lodash');

let user = {
    age: 32,
    fullname: {
        name: "Петрушко",
        surname: "Петрушечкин"
    }
};

let newUser = _.cloneDeep(user);
console.log(newUser);
newUser.fullname.surname = "Олегов";
console.log(newUser);
console.log(user);*/

//let newUser = {};

//lodash, спаси меня, ибо это анал-карнавал Оо
/*for (let key in user) {
    if (typeof user[key] == "object") {
        newUser[key] = {};

        for (let underKey in user[key]) {
            newUser[key][underKey] = user[key][underKey];
        }
    } else {
        newUser[key] = user[key];
    }
}
newUser.fullname.name = "Igor";
console.log(newUser);
console.log(user);*/

/*let condition = {
    isCondition: false
};

//Object.assign(user, condition);

for (const key in condition) {
    user[key] = condition[key];
}

console.log(user);

let newClone = Object.assign({}, user);
console.log(newClone);*/

/*const _ = require('lodash');

let user = {
    name: "Mark",
    age: 2000,
    promptDelivery() {
        console.log(`${this.name} and promptDelivery is still alive!`);
    }
};

user.printUser = function (user) {
    console.log(user);
};

user.printUser(user);
user.promptDelivery();

function log(user) {
    console.log(this.age);
};

user.func = log;

user.func();*/

/*let man = {
    name: "Adam",
    age: 5000,
    girlfriend: "Eve",
    myNameIs() {
        console.log(this.name);
    },
    myGirlFriendIs() {
        console.log(this.girlfriend);
    },
    arrowFunction: function () {
        let arrow = () => console.log(this.name);
        arrow();
    },
    arrow: () => {
        console.log(this.age);
    }
};

function askSomething(question) {
    console.log(question);
};

man.firstAction = askSomething;
man.firstAction("123");

man.getInfo = function () {
    return this.age;
};

/!*let info = man.getInfo();
console.log(info);
man.myNameIs();
man.myGirlFriendIs();
man["myGirlFriendIs"]();*!/
man.arrowFunction();
man.arrow();*/

/*let calculator = {
    read() {
        this.firstValue = +prompt("Введите первое значение", "");
        this.secondValue = +prompt("Введите второе значение", "");
    },
    sum() {
        return this.firstValue + this.secondValue;
    },
    mul() {
        return this.firstValue * this.secondValue;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());*/

/*let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};

ladder.up().up().up().down().showStep();*/

//return в функции-конструкторе вернет или this
//(если return не указан явно или если return указан, но должен вернуть примитив)
//ИЛИ вернет ЛЮБОЙ объект, указанный для этого return'а (игнорируя все остальное)
/*function User(name) {
    this.name = name;
    this.isAdmin = false;
    this.someMethod = function () {
        console.log(this.name);
    };

    //console.log(new.target);

    /!*return {
        age: 5000
    };*!/
}

let user = new User("Масянька");
console.log(user.name);
user.someMethod();*/

/*let test = {};

function FirstObject(name) {
    return test;
}
function SecondObject() {
    return test;
}

let first = new FirstObject("First");
let second = new SecondObject("First");

console.log(first == second);*/

/*function Calculator() {
    this.read = function (first, second){
        this.firstValue = +first;
        this.secondValue = +second;
    },
    this.sum = function () {
        return this.firstValue + this.secondValue;
    },
    this.mul = function () {
        return this.firstValue * this.secondValue;
    }
};

let calculator = new Calculator();
calculator.read(10, 3);
console.log(calculator.firstValue);
console.log(calculator.secondValue);

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );*/

/*function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("Введите число", '0');
    };
}

let accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();

alert(accumulator?.value);*/

/*function TestThis(testName, stage = null) {
    this.name = testName;

    if (stage !== null) {
        this.stage = {
            stageFirst: 1,
            stageSecond: 2
        };
    }
}

let test = new TestThis("demoTest", "coolStage");
console.log(test.name);
console.log(test.stage);

let demo = new TestThis("demoDemo");
console.log(demo.name);
console.log(demo.stage);*/

/*
let user1 = {
    firstName: "Иван",
    123: "qwe"
};

let user2 = null; // Представим, что пользователь не авторизован

let key = "firstName";

alert( user1?.[key] ); // Иван
alert( user2?.[key] ); // undefined

alert( user1?.[key]?.something?.not?.existing); // undefined
*/

//Symbols
/*let mySymbol = Symbol("it's a description");
console.log(mySymbol);
alert(mySymbol.toString());*/

// let prop = "newProperty12333333";

/*let number = Symbol("Number");
let user = {
    name: "Ivan",
    [number]: 10,
    [Symbol("kek")]: 20
};

let id = Symbol("id");
user[id] = 1;

console.log(user[id]);
console.log(user);

/!*user[prop] = 100;
console.log(user);
delete user[prop];
console.log(user);*!/

//console.log(user[prop]);

let keyArray = [];

//for..in игнорирует Symbols
for (const key in user) {
    keyArray.push(key);
}

console.log(keyArray);*/

/*let name = Symbol("name");
let description = Symbol("name");
let id = Symbol("id");

console.log(name == description);

let name1 = Symbol.for("name");
let description1 = Symbol.for("name1");

console.log(name1 == description1);
console.log(Symbol.keyFor(name1));
console.log(Symbol.keyFor(description1));
console.log(id.description);*/

/*let number = Symbol("Number");

let user = {
    name: "Ivan",
    [number]: 10,
    [Symbol("kek")]: 20
};

console.log(Reflect.ownKeys(user));
console.log(Object.getOwnPropertySymbols(user));*/

/*let user = {
    name: "Ivan",
    localNumber: 1001,
    [Symbol.toPrimitive](hint) {
        console.log(`our hint is equal to ${hint}`);
        return hint == "string" ? this.name : this.localNumber;
    },
    [Symbol("id")]() {

    }
}*/

/*let user = {
    name: "Ivan",
    localNumber: 1001,
    toString() {
        return this.name.toUpperCase();
    },
    valueOf() {
        return this.localNumber++;
    }
}*/

//alert(user);
// console.log(user);

// console.log(user.localNumber);
































