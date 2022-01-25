const Stack = require('../stack.js');

describe('stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('is created empty', () => {
        expect(stack.size()).toBe(0);
    });

    describe('push', () => {
        it('allows to push item', () => {
            for (let i = 0; i < 5; i++) {
                stack.push(i);
            }
            expect(stack.size()).toBe(5);
        });

        it('allows up to 100', () => {
            for (let i = 0; i < 100; i++) {
                stack.push(1);
            }
            expect(() => {
                stack.push(1);
            }).toThrow('Stack can have a maximum size of 100');
        });
    });

    describe('pop', () => {
        it('throws an error if stack is empty', () => {
            expect(() => {
                stack.pop();
            }).toThrow('Stack is empty');
        });

        it('returns the last pushed item and removes it from the stack', () => {
            for (let i = 0; i < 5; i++) {
                stack.push(i);
            }
            expect(stack.pop()).toBe(4);
            expect(stack.size()).toBe(4);
        });
    });

    describe('peek', () => {
        it('throws an error if stack is empty', () => {
            expect(() => {
                stack.peek();
            }).toThrow('Stack is empty');
        });

        it('returns the last pushed item but keeps it in the stack', () => {
            for (let i = 0; i < 5; i++) {
                stack.push(i);
            }
            expect(stack.peek()).toBe(4);
            expect(stack.size()).toBe(5);
        });
    });
});
