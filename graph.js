// 隣接リスト(adjacency list)
// 1000000

// キューの実装
class Queue {
    constructor(len) {
        //this.data = Array.from({length: len}, () => 0);
        this.data = [];
    }
    // 先頭にデータを入れる
    push(v) {
        this.data.unshift(v);
    }
    pop() {
        return this.data.pop();
    }
    isEmpty() {
        return this.data.length === 0;
    }
}

// スタックの実装
class Stack {
    constructor() {
        this.data = [];
    }
    push(v) {
        this.data.push(v);
    }
    pop() {
        return this.data.pop();
    }
    isEmpty() {
        return this.data.length === 0;
    }
    top() {
        return this.data[this.data.length - 1];
    }
}

// 登録、削除時にO(n)のコストがかかる。
class ArrayList {
    constructor(capacity = 10) {
        this.data = new Array(capacity);
        this.count = 0; // 要素数
    }
    expand() {
        let d = new Array(this.data.length * 2);
        // copy.
        for (let i = 0; i < this.data.length; i++) {
            d[i] = this.data[i];
        }
        this.data = d;
    }
    add(index, element) {
        if (this.count >= this.data.length) {
            this.expand();
        }
        // 空きスペースを作る
        for (let n = this.count; n > index; n--) {
            this.data[n] = this.data[n - 1];
        }
        this.data[index] = element;
        this.count++;
    }
    get(index) {
        return this.data[index];
    }
    remove(index) {
        for (let n = index; n < this.count - 1; n++) {
            this.data[n] = this.data[n + 1];
        }
        this.count--;
    }
    size() {
        return this.count;
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.first = null; // JavaScriptでnull,undefinedはプリミティブ型で値渡し
    }
    // nodeを返す。
    insertFirst(element) {
        let n = new Node(element, this.first);
        this.first = n;
        return n;
    }
    insertAfter(node, element) {
        let n = new Node(element, node.next);
        node.next = n;
        return n;
    }
    eraseFirst() {
        if (this.first !== null)
            this.first = this.first.next;
    }
    // 指定したノードの次のノードを削除。
    eraseAfter(node) {
        if (node != null && node.next != null)
            node.next = node.next.next;
    }

    count() {
        let count = 0;
        for (let n = this.first; n != null; n = n.next)
            count++;
        return count;
    }
    show() {
        console.log(this.toString());
    }
    toString() {
        let sb = '';
        for (let n = this.first; n != null; n = n.next)
            sb += `${n.value}=>`;
        sb += 'null';
        return sb;
    }
    // TODO: erase
    erase(node) {
        // 先頭からnodeのひとつ前のノードを探す
        let prev = this.first;
        for (; prev != null && prev.next != node; prev = prev.next) {
            console.log('prev.next=', prev.next)
        }
        //console.log(prev);
        // TODO:先頭データを消すと、すべて消えてしまう。
        // nodeがあって、node.nextがnullの場合は、以下のコード。node.nextが存在する場合は、node.nextをthis.firstにする。
        /*
        if (prev === this.first) { // 先頭を削除するのでデータがなくなる
            this.first = null;
            console.log('x')
            return null;
        }
        */
        if (prev != null) { // 通常の削除
            this.eraseAfter(prev);
            return prev.next;
        }
        return null;
    }
}

class Cell {
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

// Hashtableの実装の仕組みを使うと、SetとHashMapが作れる。
class Hashtable {
    constructor(capacity = 256) {
        this.capacity = capacity;
        this.table = new Array(capacity);
    }
    getHash(key) {
        let value = 0;
        let v = key.split('').map(x=>x.charCodeAt()).reduce((acc, b)=> acc + b);
        return v % this.capacity;
    }
    insert(key, value) {
        // コードが同じなら、LinkedListでデータを追加する。
        let code = this.getHash(key);
        let prevHead = this.table[code];
        this.table[code] = new Cell(key, value, prevHead);
    }
    erase(key) {
        let code = this.getHash(key);
        let head = this.table[code];
        if (!head) {
            return;
        }
        if (head.next == null) { // データが一つ
            this.table[code] = null;
            return;
        }
        if (head.key == key) {
            this.table[code] = head.next;
            return;
        }
        console.log('ppp----------', key)
        // find previous cell.
        for (let t = head; t.next != null; t = t.next) {
            console.log(t.next.key);
            if (t.next.key == key) {
                t.next = t.next.next;
                console.log('break!!!!!')
                break;
            }
        }
    }
    find(key) {
        let code = this.getHash(key);
        let head = this.table[code];
        while (head != null) {
            if (head.key === key) {
                return head;
            }
            head = head.next;
        }
        return null;        
    }
    contains(key) {
        let code = this.getHash(key);
        let head = this.table[code];
        while (head != null) {
            if (head.key === key) {
                return true;
            }
            head = head.next;
        }
        return false;
    }
}

module.exports = {
    Stack: Stack,
    Queue: Queue,
    ArrayList: ArrayList,
    LinkedList: LinkedList,
    Hashtable, Hashtable,
};


//////////////////
// 隣接行列
var graph = new Array(1050);
const gen_graph = n => Array.from({ length: n }, (v, k) => new Array(n).fill(0));

//console.log(gen_graph(1050)[10][1]);

var adj = [];

// 幅優先探索(breadth first search, BFS)

// 深さ優先探索(depth first search, DFS)