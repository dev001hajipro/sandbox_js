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

    it ('arraylist', () => {
        let al = new g.ArrayList();
        al.add(0, 10);
        al.add(1, 20);
        console.assert(al.size() === 2);
        console.assert(al.get(1) === 20);
    });
    it ('linkedlist', () => {
        let ll = new g.LinkedList();
        ll.insertFirst(5);
        ll.insertFirst(15);
        ll.insertFirst(23);
        ll.eraseFirst();
        ll.eraseFirst();
        let n40 = ll.insertFirst(40);
        ll.insertFirst(50);
        //ll.show();
        //console.log(n40);
        ll.insertAfter(n40, 60);        
        //ll.show();
        ll.eraseAfter(n40);
        //ll.show();
    });
    it ('linkedlist', () => {
        let ll = new g.LinkedList();
        ll.insertFirst(5);
        ll.insertFirst(15);
        ll.insertFirst(23);
        //ll.show();
    });
    it ('linkedlist erase', () => {
        let ll = new g.LinkedList();
        ll.insertFirst(5);
        let n15 = ll.insertFirst(15);
        ll.insertFirst(23);
        console.assert(ll.toString() === '23=>15=>5=>null')
        ll.erase(n15); 
        console.assert(ll.toString() === '23=>5=>null')
    });

    it ('hashtable 1', () => {
        let hs = new g.Hashtable();
        console.assert(hs !== null);
        console.assert(hs.getHash("hello") === 20)
        console.assert(hs.getHash("a") === 97)
    });

    it ('hashtable insert', () => {
        let hs = new g.Hashtable();
        console.assert(hs !== null);
        console.assert(hs.getHash("hello") === 20)
        console.assert(hs.getHash("a") === 97)
        hs.insert("hello", 5);
        hs.insert("idllo", 21);
        console.log(hs.table);
        hs.erase("idllo");
        console.log(hs.table);
    });
});