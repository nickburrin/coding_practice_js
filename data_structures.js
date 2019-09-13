
export class Queue {
    constructor() {
        this.q = new Array();
    }

    dequeue() {
        return q.pop()
    }

    enqueue(item) {
        q.unshift(item);
    };
}

export class Stack {
    constructor() {
        this.q = new Array();
    }
    
    pop() {
        return q.pop();
    }

    push(item) {
        q.push(item);
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