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
            return null;
        }
    }

    get() {
        return this.stack;
    }
}

module.exports = Stack;
