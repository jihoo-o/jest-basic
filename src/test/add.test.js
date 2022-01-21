const add = require('../add.js');

test('add 1 + 2, expect 3', () => {
    // 테스트 코드 작성
    expect(add(1, 2)).toBe(3);
});
