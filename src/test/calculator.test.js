const Calculator = require('../calculator.js');

describe('Calculator', () => {
    let cal;
    beforeEach(() => {
        cal = new Calculator();
    });

    // it <-> test
    it('inits with 0', () => {
        expect(cal.value).toBe(0);
    });

    it('set', () => {
        cal.set(10);
        expect(cal.value).toBe(10);
    });

    it('clear', () => {
        cal.clear();
        expect(cal.value).toBe(0);
    });

    it('add', () => {
        cal.set(1);
        cal.add(10);
        expect(cal.value).toBe(11);
    });

    it('sub', () => {
        cal.subtract(10);
        expect(cal.value).toBe(-10);
    });

    it('multiply', () => {
        cal.set(10);
        cal.multiply(10);
        expect(cal.value).toBe(100);
    });

    describe('divides', () => {
        it('0 / 0 === NaN', () => {
            cal.divide(0);
            expect(cal.value).toBe(NaN);
        });

        it('1 / 0 === Infinity', () => {
            cal.set(1);
            cal.divide(0);
            expect(cal.value).toBe(Infinity);
        });

        it('100 / 10 === 10', () => {
            cal.set(100);
            cal.divide(10);
            expect(cal.value).toBe(10);
        });
    });
});
