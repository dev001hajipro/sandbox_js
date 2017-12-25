// 隣接リスト(adjacency list)
// 1000000

// スタックの実装
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
        return this.data[this.data.length-1];
    }
}

module.exports = {
    Stack: Stack,
    Queue: Queue,
};

class Node {
    constructor(name) {
        this.name = name;
    }
}

// 幅優先探索(breadth first search, BFS)

// 深さ優先探索(depth first search, DFS)