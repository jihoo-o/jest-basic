class Stack {
    constructor() {
        this._size = 0;
        this.head = null;
    }

    push(item) {
        if (this._size >= 100) {
            throw new Error('Stack can have a maximum size of 100');
        } else {
            const node = { item, next: this.head };
            this.head = node;
            this._size++;
        }
    }

    pop() {
        if (this.head === null) {
            throw new Error('Stack is empty');
        } else {
            const lastItem = this.head;
            this.head = lastItem.next;
            this._size--;
            return lastItem.item;
        }
    }

    peek() {
        if (this.head === null) {
            throw new Error('Stack is empty');
        } else {
            return this.head.item;
        }
    }

    size() {
        return this._size;
    }
}

module.exports = Stack;
