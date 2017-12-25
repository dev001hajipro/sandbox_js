var la = require('lazy-ass');
var check = require('check-more-types');

describe('graph', () => {
    var g;
    beforeEach(() => g = require('../graph'));

    it ('stack', () => {
        let s = new g.Stack();
        s.push(5);
        s.push(11);
        console.assert(s.top() === 11);
        console.assert(s.pop() === 11);
        console.assert(s.top() === 5);
        console.assert(s.pop() === 5);
        console.assert(s.isEmpty());
    });

    it ('queue', () => {
        let q = new g.Queue();
        q.push(3);
        q.push(8);
        console.assert(q.isEmpty() === false);
        console.assert(q.pop() === 3);
        console.assert(q.pop() === 8);
        console.assert(q.pop() === undefined);
    });
});