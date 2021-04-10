function firstFunction(a, b) {
    return a + b;
}

console.log(firstFunction(10, 20));

function prod(a, b) {
    return a * b;
}

console.log(prod(10, 2));

setTimeout(function () {
    console.log("What the heck is anonymous func?");
}, 1000);

setTimeout(() => console.log("What the heck is arrow func?"), 1000);

