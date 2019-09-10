
class Queue {
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

class Stack {
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

export class ListNode {
    constructor(v) {
        this.val = v;
        this.next = null;
    }

    printList() {
        let node = this
        var result = this.val
        while(node.next != null) {
            node = node.next
            result += " " + node.val
        }

        return result
    }
}