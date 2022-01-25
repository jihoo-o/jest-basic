const Stack = require('../stack.js');

describe('stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('inits with []', () => {
        const result = stack.get();
        expect(result).toEqual([]);
    });

    it('push 0 to 4', () => {
        for (let i = 0; i < 5; i++) {
            stack.push(i);
        }
        const result = stack.get();
        expect(result).toEqual([0, 1, 2, 3, 4]);
    });

    it('stack size is limited to 100', () => {
        for (let i = 0; i < 105; i++) {
            stack.push(1);
        }
        const result = stack.get();
        expect(result).toHaveLength(100);
    });

    it('pop the last item of [0, 1, 2, 3, 4]', () => {
        for (let i = 0; i < 5; i++) {
            stack.push(i);
        }
        const poppedItem = stack.pop();
        const result = stack.get();
        expect(poppedItem).toBe(4);
        expect(result).toEqual([0, 1, 2, 3]);
    });

    it('prevent popping from trying it on the stack size is 0', () => {
        const poppedItem = stack.pop();
        expect(poppedItem).toBe(null);
    });
});
