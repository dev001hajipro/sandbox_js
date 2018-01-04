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
        let sb = '';
        for (let n = this.first; n != null; n = n.next)
            sb += `${n.value}=>`;
        sb += 'null';
        console.log(sb);
    }
}

module.exports = {
    Stack: Stack,
    Queue: Queue,
    ArrayList: ArrayList,
    LinkedList: LinkedList,
};


//////////////////
// 隣接行列
var graph = new Array(1050);
const gen_graph = n => Array.from({ length: n }, (v, k) => new Array(n).fill(0));

//console.log(gen_graph(1050)[10][1]);

var adj = [];

// 幅優先探索(breadth first search, BFS)

// 深さ優先探索(depth first search, DFS)