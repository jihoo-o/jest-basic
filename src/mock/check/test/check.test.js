const check = require('../check.js');

describe('check', () => {
    let onSuccess;
    let onFail;

    beforeEach(() => {
        onSuccess = jest.fn();
        onFail = jest.fn();
    });

    it('should call onSuccess when predicate is true', () => {
        check(() => true, onSuccess, onFail);

        // 호출 횟수 검증
        // expect(onSuccess.mock.calls.length).toBe(1);
        expect(onSuccess).toHaveBeenCalledTimes(1);

        // 첫번째 호출의 첫번째 argument 검증
        // expect(onSuccess.mock.calls[0][0]).toBe('yes');
        expect(onSuccess).toHaveBeenCalledWith('yes');

        expect(onFail).toHaveBeenCalledTimes(0);
    });

    it('should call onSuccess when predicate is false', () => {
        check(() => false, onSuccess, onFail);

        expect(onFail).toHaveBeenCalledTimes(1);
        expect(onFail).toHaveBeenCalledWith('no');
        expect(onSuccess).toHaveBeenCalledTimes(0);
    });
});
