const fetchProduct = require('../async.js');

describe('Async', () => {
    it('return', () => {
        return fetchProduct().then((data) => {
            expect(data).toEqual({ item: 'Milk', price: 200 });
        });
    });

    it('done', (done) => {
        fetchProduct().then((data) => {
            expect(data).toEqual({ item: 'Milk', price: 200 });
            done();
        });
    });

    it('.resolve', () => {
        return expect(fetchProduct()).resolves.toEqual({
            item: 'Milk',
            price: 200,
        });
    });

    it('.reject', () => {
        return expect(fetchProduct('error')).rejects.toMatch('error');
    });

    it('Async/Await', async () => {
        const data = await fetchProduct();
        expect(data).toEqual({ item: 'Milk', price: 200 });
    });

    it('Async/Await - fails', async () => {
        expect.assertions(1);
        try {
            await fetchProduct('error');
        } catch (e) {
            expect(e).toMatch('error');
        }
    });
});
