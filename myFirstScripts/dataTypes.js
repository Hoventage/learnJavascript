/*
Оператор несторого равенства == приводит операнды к числу, поэтому 0 == false будет true
В свою очередь, оператор строгого равенства === не пытается привести операнды к чему-либо и сравнивает "как есть"
 */

'use strict';

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
//let str = "kelamoke";
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

/*console.log(str.indexOf("ke"));
console.log(str.lastIndexOf("ke"));
console.log(str.includes("lamoke"))
let slicedStr = str.slice(0, 4)
/!*let finalStr = str.concat(slicedStr);
console.log(finalStr)*!/
let newSuperStr = str.replace(slicedStr, '');
console.log(newSuperStr)*/

/*
function ucFirst(str) {
    if (typeof str != "string") return str;
    return str[0].toString().toUpperCase() + str.slice(1);

}

let newStr = ucFirst("lololosHSa");
console.log(newStr);
*/

/*function checkSpam(strToCheck) {
    let strToLower = strToCheck.toLowerCase();

    if (strToLower.includes("viagra") || strToLower.includes("XXX")) {
        return true;
    }

    return false;
}

console.log(checkSpam("123vIAgra"));*/

/*function truncate(str, maxLength) {
    let difference = str.length - maxLength;
    return (str.length > maxLength)? str.slice(0, str.length - (difference + 1)) + '…' : str;
}

let string =  truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
console.log(string);*/

/*function extractCurrencyValue(str) {
        return +str.slice(1);
}


console.log(extractCurrencyValue("$120"));*/

//Arrays
//array - это объект
/*let array = [1, 2, 3];
array.push(4, 4); //push подливает элемент в конец массива
console.log(array);
array.shift(); //shift выкашивает первый элемент массива, сдвигая все остальные элементы на 1 влево
console.log(array);
array.pop(); //pop удаляет последний элемент и возвращаетего
console.log(array);
array.unshift(10, 11); //unshift добавляет элемент в начало массива
console.log(array);

let newArray = array;
console.log(newArray === array); //массивы копируются по ссылке

for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
}*/

/*let styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
//styles[1] = "Классика";
styles[Math.floor((styles.length - 1) / 2)] = "Классика"; //вот же говно
console.log(styles);
styles.shift()
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);

styles.push(function () {
    alert(this);
});

console.log(styles);
styles[4]();*/


/*function sumArrayMembers(array) {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
}

function sumInput() {
    let array = [];
    let value;

    while (true) {
        value = prompt("Введите число", "");

        if (!isFinite(value) || value === '' || value == null) { //isFinite)() проверяет, конечное ли число. Короче число ли?
            break;
        }

        array.push(+value);
    }

    return sumArrayMembers(array);
}


let result = sumInput();
console.log(result);*/

/*let array = [1, 2, 3, 4, 5];
//splice() может удалить элемент в любой позиции + добавить новые элементы куда угодно + даже без удаления)))))
array.splice(5, 0, "вот это супер тема при работе с массивами");
console.log(array);
//slice(start, end) вернет новый массив; end - НЕ включается
//slice() без аргументов просто копирует массив, создав новый; полезно, если нужен клон массива, а изменять базовый не желательно
let slicedArray = array.slice(0, array.length - 1);
console.log(slicedArray);

//Symbol.isConcatSpreadable - проперти, нужное для конкатенации объекта с массивом; также будет нужно свойство length;
//в массив поедут только те свойства, кеи которых обозначены как числа (в явном виде или строчно - болт, т.к все приведется к строке)
let user = {
    "0": 10,
    1: 123,
    [Symbol.isConcatSpreadable]: true,
    length: 2
}
*/
//let array1 = [10, 2, 3, 8, 5]
// console.log(array1.concat(user))

/*array1.forEach(value => {
    console.log(value);
});*/

/*array1.forEach(function (element) {
    console.log(element);
});*/

/*let myValue = array1.find(element => typeof element === "string");
console.log(myValue);

let myValue1 = array1.filter(element => typeof element === "number");
console.log(myValue1);

let myValue2 = array1.map(element => ++element);
console.log(myValue2);*/

/*let myValue3 = array1.sort((a, b) => a - b);
console.log(myValue3);

let array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array);

let strings = "123, 456, 789";

let arr = strings.split(", ");
console.log(arr);

let joinedStr = arr.join(" and ");
console.log(joinedStr);

//reduce() делает что-то с элементами массива и возвращает некий результат
//reduceRight() - аналог, но пинает элементы массива с другой стороны
let result = array.reduce(function (dif, current) {
    console.log(dif + " and " + current);
    return dif - current;
});
console.log(result);*/

//Array.isArray() вернет true, если в качестве аргумента передан массив; метод нужен, так как и массив и объект - это одно и то же
// с точки зрения typeof
//console.log(Array.isArray(arr));

/*let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(user => army.canJoin(user));

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23*/

/*let array = [4, 5, 3, 1, 2];
let temp = 0;

//пузырьковая сортировка (сортанет элементы массива по возрастанию)
for (let i = 0; i < array.length - 1; i++) { //перебираем все элементы массива по индексу
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

console.log(array);*/

/*let array = [1, 5, 3, 4, 2];
let temp = 0;

for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
}

console.log(array);*/

/*function camelize(str) {
    return str
        .split("-")
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join("");
}

console.log(camelize("qwerty-lolla-pukka"));*/

/*
function filterRange(array, a, b) {
    return array
        .filter(element => element >= a && element <= b);

}

console.log(filterRange([5, 3, 8, 1], 1, 4));*/

/*function filterRangeInPlace(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];

            if (value < a || value > b) {
                array.splice(i, 1);
                i--;
            }
        }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


filterRangeInPlace(array, 4, 7);

console.log(array);*/

/*let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);*/

/*function copySorted(array) {
    // let newArray = [...array]; //ES06 way to copy array (not by reference)
    return array
        .slice() //вернет новый массив со всеми элементами, так как нет указания с какого по какой брать
        .sort(); //сортанет по дефолту (как раз сортит строки)
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted);*/

//очень прикольный пример
/*function Calculator() {
    this.calculate = function (string) {
        let members = string.split(' ');
        let action = members[1];
        let firstMember = +members[0];
        let secondMember = +members[2];

        if (!this.methods[action] || isNaN(firstMember) || isNaN(secondMember)) {
            return NaN;
        }

        return this.methods[action](firstMember, secondMember);

    };

    //вложенный объект для хранения методов; метод - проперти вложенного объекта
    this.methods = {
        '+': (a, b) => a + b,
        /!*'-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '**': (a, b) => a ** b,
        '/': (a, b) => a / b*!/
    };

    //метод, который просто добавляет новую пропертю вложенному объекту с методами ахаххахахахаха)
    //
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    }
}

let calc = new Calculator;
console.log(calc.calculate("3 + 7")); // 10
calc.addMethod("*", (a, b) => a * b);
console.log(calc.calculate("3 * 7")); // 21*/

/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let arrayOfNames = users.map(user => user.name);
console.log(arrayOfNames);*/

/*let vasya = {name: "Вася", surname: "Пупкин", id: 1};
let petya = {name: "Петя", surname: "Иванов", id: 2};
let masha = {name: "Маша", surname: "Петрова", id: 3};

let users = [vasya, petya, masha];

//кладем новый объект в массив сразу -> []
let usersMapped = users.map(user => [
    {
        fullname: user.name + " " + user.surname,
        id: user.id
    }
]);

console.log(usersMapped);*/

/*let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};

let arr = [vasya, petya, masha];

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

console.log(arr);*/

/*let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 29};

let arr = [vasya, petya, masha];

function getAverageAge(users) {
    //return (users.reduce((agesSum, currentUser) => agesSum + currentUser.age, 0)) / users.length;
    return (users.reduce(function (agesSum, currentUser) {
        return agesSum + currentUser.age;
    }, 0)) / users.length
}

console.log(getAverageAge(arr));*/

/*function unique(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O*/

/*function Calculator() {
    this.methods = {
        "+": (a, b) => a + b
    };
    this.calculate = function (string) {
        let array = string.split(" ");
        let first = +array[0];
        let operation = array[1];
        let second = +array[2];

        return this.methods[operation](first, second);

    };
    this.addMethod = function (name, func) {
        this.methods[name] = func
    };
}

let calc = new Calculator();
console.log(calc.calculate("1 + 2"));
calc.addMethod("**", (a, b) => a ** b);
console.log(calc.calculate("2 ** 2"));

let calculator = {
    calculate: function (string) {
        let array = string.split(" ");
        let first = +array[0];
        let operation = array[1];
        let second = +array[2];

        return this.methods[operation](first, second);
    },
    addMethod: function (name, func) {
        this.methods[name] = func
    },
    methods: {
        "+": (a, b) => a + b
    }
};

console.log(calculator.calculate("1 + 2"));
calculator.addMethod("*", (a, b) => a * b);
console.log(calculator.calculate("12 * 2"));*/

//Перебираемые объекты
/*let arr = ['el1', 'el2', 'el3'];

arr.addedProp = 'arrProp';

// for in перебирает КЕИ
for (let elKey in arr) {
    console.log(elKey);
}
console.log("__________")
console.log(arr)
// for of перебирает ВЭЛЬЮС
for (let elValue of arr) {
    console.log(elValue)
}*/

/*const date = {
    from: 1,
    to: 100
};

//Стандартная реализация итератора, чтобы сделать доступным перебор в for of цикле
// 1. вызов for..of сначала вызывает эту функцию
date[Symbol.iterator] = function () {
    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
    return {
        startDate: this.from,
        endDate: this.to,
        next() {
            if (this.startDate <= this.endDate) {
                return {
                    done: false,
                    value: this.startDate++
                };
            } else {
                return {
                    done: true
                };
            }
        }
    }
}

for (let dateElement of date) {
    console.log(dateElement);
}

let str = "Вот тебе на!"
/!*for (let char of str) {
    if (char === false) {
        console.log(' ');
    }
    console.log(char);
}*!/

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) {
        break;
    }

    console.log(result.value);
}

//Array.from() приводит итерируемый объект или псевдомассив к обычному массиву
// (перебираются все значения и кладутся в массив)
//итерируемые объекты -> объекты, для которых реализован метод Symbol.iterator (или из коробки, или кастомно)
let arrayFromDate = Array.from(date); // вторым аргументом можно додавить функцию, которая выполнится для каждого элемента
// например ->>>>> Array.from(date, number => number * number);
console.log(arrayFromDate);

//псевдомассивы -> объекты, у которых есть индексы (1: 123, 2: 456 и так далее) и свойство length
let arrayFromStr = Array.from(str);
console.log(arrayFromStr);*/

//Map and Set
//в отличии от объектов, которые приводят кеи к строкам, в мапах как запишешь, так и ляжет :D
/*let map = new Map();
map
    .set(1, "1")
    .set(2, "2")
    .set(true, "3");
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
console.log(map.get(true));

let company = {
    name: "TestCompany",
    employeesCount: 1000
}

map.set(company, 1);
console.log(map.get(company));
console.log(map.has(123));

let newMap = new Map([
    ["некая строка", 321],
    [123, 321]
]);
console.log(newMap.entries());

newMap.forEach((key, value) =>
    console.log(key + value));

//создание мапы из объекта
let companyMap = new Map(Object.entries(company));
console.log(companyMap);

//создание объекта из мапы
//let newCompany = Object.fromEntries(companyMap);
let newCompanyTest = Object.fromEntries(companyMap.entries());
/!*let newCompany = Object.fromEntries([
    ["name", "TestCompany"],
    ["employeesCount", 1000]
]);*!/

console.log(newCompanyTest);*/

/*let set = new Set();
set.add(123);
set.add(456);
set.add(789);
set.add("the final element of the set");

for (let setElement of set) {
    console.log(setElement);
}

set.forEach(element => console.log(element));*/


//Array.from() сделает массив из входных данных
/*function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values)); // Hare,Krishna,:-O*/


/*function aClean(array) {
    let map = new Map();

    for (let word of array) {
        let sorted = Array.from(word).sort().join("").toLowerCase();
        map.set(sorted, word);
    }

    return Array.from(map.values());

    /!*let set = new Set();
    let arrayToReturn = [];

    for (const arrayElement of array) {
        set.add(Array.from(arrayElement).sort().join('').toLowerCase());
    }

    arrayToReturn = Array.from(set);

    return arrayToReturn;*!/
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aClean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"*/

/*let map = new Map();

map.set("name", "John");

//map.keys() возвращает итерируемый объект, а не массив!!!

let keys = Array.from(map.keys());
console.log(keys);
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
console.log(keys);*/

//WeakMap and WeakSet
//тут в качестве ключей - могут быть ТОЛЬКО объекты; при удалении ссылки на объект, пара ключ-значение так же удаляется из вик мапы сборщиком мусора
//в обычных мапах и сетах объекты остаются доступными даже в случае зануления ссылок на них, так как они все еще есть в мапе/сете

//в этом примере видно, что коллекция растет, считается количество входов (например) пользователя
//если юзер уйдет (удалится), то коллекция останется и, когда юзер вернется, коллекция продолжит расти
//и, при этом, информация из нее будет для нас почти бесполезна
/*let map = new Map();
let user = {
    name: "Ivan",
    age: 37
}

function countMe(thingToCount, map) {
    let count = map.get(thingToCount) || 0;
    map.set(thingToCount, count + 1);
}

countMe(user, map);
console.log(map.get(user));
countMe(user, map);
console.log(map.get(user));
countMe(user, map);
console.log(map.get(user));

user = null;
console.log(map.get(user));
console.log(map.size);
console.log(map.has(user));
console.log(map); //наш юзер все еще тут*/

//тот же пример, но с использованием WeakMap
/*let weakMap = new WeakMap();
let user = {
    name: "Ivan",
    age: 37
}

function countMe(thingToCount, map) {
    let count = map.get(thingToCount) || 0;
    map.set(thingToCount, count + 1);
}

countMe(user, weakMap);
console.log(weakMap.get(user));
countMe(user, weakMap);
console.log(weakMap.get(user));
countMe(user, weakMap);
console.log(weakMap.get(user));

user = null;

//если ключа нет, то вернется undefined
console.log(weakMap.get(user)); //undefined, так как user был удален
console.log(weakMap.get({
    name: "test"
})); //undefined, так как user был удален
console.log(weakMap.has(user));
console.log(weakMap); //должен быть пустым*/

/*let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

function wasRead(messages) {
    let weakMap = new WeakMap();
    for (let message of messages) {
        weakMap.set(message, false);
    }

    for (let i = 0; i < messages.length; i++) {
        if (weakMap.has(messages[i])) {
            let status = Symbol("was read");
            messages[i][status] = true;
            console.log(`The message ${messages[i].text} from ${messages[i].from} was read`);
        } else {
            console.log(`The message ${messages[i].text} from ${messages[i].from} wasn't read`);
        }
    }

    for (let message of messages) {
        if (Object.getOwnPropertySymbols(message) !== null) {
            console.log(Object.getOwnPropertySymbols(message));
        }
    }
}

wasRead(messages);*/

/*let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let weakSet = new WeakSet();

weakSet
    .add(messages[0])
    .add(messages[1])
    .add(messages[2]);

for (let message of messages) {
    let isRead = Symbol("isRead");
    message[isRead] = true;
}

messages.shift();*/

/*let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let weakMap = new WeakMap();
weakMap
    .set(messages[0], new Date(2021, 4, 20))
    .set(messages[1], new Date(2021, 4, 20))
    .set(messages[2], new Date(2021, 4, 20));

messages[2] = null;

for (let message of messages) {
    console.log(weakMap.has(message));
    console.log(weakMap.get(message));

}*/

//Object.keys, values, entries






































