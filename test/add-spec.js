var la = require('lazy-ass');
var check = require('check-more-types');

describe('add', function() {
    var add;
    beforeEach(function () {
        add = require('../add');
    });
    it('it a function', function() {
        //console.assert(typeof add == 'function');
        la(check.fn(add), 'expected add function', add);
    });
    it('1+1 = 2', function() {
        console.assert(add(1,1) === 2);
    });
})