/*let color = "white";
let level = 100;

if (color === "white" && level === 100) {
    console.log(`Color is: ${color}, and the level equals: ${level}`);
} else {
    console.log("Actually, this color isn't white or blue. so... this is kinda bad :D");
}*/

function someFunc() {
    console.log("Woopy-doopy!")
};

const someObject = {
    first: 100,
    second: "200",
    third: function () {
        console.log("this is the third property")
    }
};

if (someObject.first === 100 && someObject.second === "200") {
    someObject.third();
    someFunc();
} else {
    console.log("Welp, this is another string, folks! :D")
}

class MyFreakingClass {
    constructor(name, property) {
        this.name = name;
        this.property = property;
    }

    getProperty() {
        return this.property;
    }
}

const myInstance = new MyFreakingClass("testName", "testProperty");
let prop = myInstance.getProperty();
console.log(prop);

const herInstance = new MyFreakingClass();
herInstance.name = "herInstName";
herInstance.property = "herInstProp";

let herProp = herInstance.getProperty();
console.log(herProp);
