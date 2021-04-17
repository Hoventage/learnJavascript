let assert = require('chai');

function pow(x, n) {
    if (x > 0 && n > 0) {
        return x ** n;
    } else {
        return NaN;
    }
}

describe("pow", function () {
    /*before(() => alert("Before all tests"));
    after(() => alert("After all tests"));*/

    describe("raise numbers", function () {
        /*beforeEach(() => alert("Before every test"));
        afterEach(() => alert("After every test"));*/

        let number = 10;

        it("should raise to the n", function () {
            assert.assert.equal(pow(2, 3), 2 ** 3);

        });

        it('should do some magic here', function () {
            assert.assert.equal(pow(10, 123), 10 ** 123);
        });

        function makeJSAutoTestingGreatAgain(numberToRaise, raiser) {
            it(`holy crap! ${numberToRaise} ** ${raiser} = ${numberToRaise ** raiser}`, function () {
                assert.assert.equal(pow(numberToRaise, raiser), numberToRaise ** raiser);
            });
        }

        for (let i = 1; i < number; i++) {
            makeJSAutoTestingGreatAgain(i, number);
        }

        it('should return isNaN', function () {
            assert.assert.isNaN(pow(2, -4));
        });
    });
});