const Calculator = require('../calculator.js');

test('Calculator', () => {
    const calc = new Calculator();

    expect(calc).toBeInstanceOf(Calculator);
    expect(calc).toEqual({ value: 0 });
    // expect(calc).toStrictEqual({ value: 0 }); // Fail

    calc.set(10);
    expect(calc).toEqual({ value: 10 });

    calc.add(10);
    expect(calc).toEqual({ value: 20 });

    // 에러 캐치를 위해 테스트 코드를 함수로 감싸야 함
    expect(() => {
        calc.add(200);
    }).toThrowError(new Error('Value can not be greater than 100'));

    calc.add(10);
    expect(calc).toEqual({ value: 30 });

    calc.subtract(10);
    expect(calc).toEqual({ value: 20 });

    calc.multiply(10);
    expect(calc).toEqual({ value: 200 });

    calc.divide(10);
    expect(calc).toEqual({ value: 20 });
});
