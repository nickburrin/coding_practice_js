
export class Queue {
    constructor() {
        this.q = new Array();
        this.dequeue = function () {
            return this.q.pop();
        };
        this.enqueue = function (item) {
            this.q.unshift(item);
        };
    }
}

export class Stack {
    constructor() {
        this.q = new Array();
        this.pop = function () {
            return this.q.pop();
        };
        this.push = function (item) {
            this.q.push(item);
        };
    }
}

export { Queue, Stack }; 