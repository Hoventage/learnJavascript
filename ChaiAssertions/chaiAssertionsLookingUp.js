import {assert, expect, should} from "./chai-locals.js";


//expect - BDD
/*const expect = chai.expect;

//should() - BDD
const should = chai.should();

//Assert - TDD
const assert = chai.assert; //no chaining possible*/

//expect examples
let b = 10;
let c = 20;

expect(c).to.be.greaterThan(b, "b is not greater than c");
c.should.be.greaterThan(b, "b is not greater than c");
assert.notEqual(c, b, "b is not equal to c");


//ex with comparing object
function someObject() {
    return {
        firstProp: "firstProp",
        secondProp: 100
    }
}

let x = someObject();
let z = someObject();
expect(x).to.be.an('object'); //проверка на тип данных
// expect(x).to.be.equals(z); //падает, так как объекты не равны (разные ссылки)
expect(x).to.be.deep.equals(z); //проходит, - сравнивается внутрянка
//chaining expressions
expect(x).to.be.an('object')
    .and
    .deep.equals(z);

x.should.not.be.equals(z);
x.should.be.deep.equals(z);
x.should.be.an('object').and.be.deep.equals(z);
assert.isObject(x);
assert.deepEqual(x, z, "x and z are not deep equal");

//arrays
let array = [1, 2, 3, 4];
expect(array).to.be.an('array').that.includes(4);
array.should.be.an('array').that.includes(4);
assert.isArray(array, `${array} is not an array!`);
assert.include(array, 4);
//если сущности нет, то лучше верифицировать ее не через equals, а через exist:
should.exist(array[3]);
should.not.exist(array[30]);