class Stack {
    constructor() {
        this.stack = [];
    }

    push(n) {
        if (this.stack.length < 100) {
            this.stack.push(n);
        }
    }

    pop() {
        if (this.stack.length > 0) {
            return this.stack.pop();
        } else {
            throw new Error('Stack is empty');
        }
    }

    peek() {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1];
        } else {
            throw new Error('Stack is empty');
        }
    }

    size() {
        return this.stack.length;
    }
}

module.exports = Stack;
