var la = require('lazy-ass');
var check = require('check-more-types');

describe('calc', () => {
    var calc;
    beforeEach(() => calc = require('../calc'));

    it('add a function', () => {
        //console.assert(typeof add == 'function');
        la(check.fn(calc.add), 'expected add function', calc.add);
    });
    it('add 1+1 = 2', () =>
        console.assert(calc.add(1,1) === 2));

    it('sub a function', () => {
        la(check.fn(calc.sub), 'expected sub function', calc.sub);
    });
    it('sub 1-1 = 0', () =>
        console.assert(calc.sub(1,1) === 0));
})