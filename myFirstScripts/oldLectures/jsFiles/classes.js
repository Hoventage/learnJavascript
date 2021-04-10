const testObj = {
    name: "what the bloody heck?!",
    anotherProperty: function () {
        console.log("lol!)))")
    }
};

testObj.anotherProperty();


class Epic {
    myName() {
        console.log(`Return me ${this.name}`);
    }

    constructor(name, notName) {
        this.name = name;
        this.notName = notName;
    }
}

const notSuchNewAsUThink = new Epic("this is the name", true);
console.log(notSuchNewAsUThink);
notSuchNewAsUThink.myName();
