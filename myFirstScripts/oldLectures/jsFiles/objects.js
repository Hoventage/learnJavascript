let someBool = confirm("what!!!!&!&!&!");

if (someBool === true) {
    let myString = prompt("kinda validation :D", "lol!");
    console.log(myString);
} else {
    console.log("lalka");
}

const myFreakingObject = {
    objBane: "OMG!!!",
    objTarget: 1000,
    "object... whatever": 101
};

console.log(myFreakingObject);
console.log(myFreakingObject.objBane);
console.log(myFreakingObject["object... whatever"]);

function reverse(array) {
    let firstIndex = 0;
    let lastIndex = array.length - 1;

    while (firstIndex < lastIndex) {
        array[firstIndex] = (array[firstIndex] + array[lastIndex]) - (array[lastIndex] = array[firstIndex]);
        firstIndex++;
        lastIndex--;
    }

    console.log(array);
}