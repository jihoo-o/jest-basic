const ProductService = require('../product_service.js');
const StubProductClient = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
    let productService;

    beforeEach(() => {
        productService = new ProductService(new StubProductClient());
    });

    it('should filter out only available items', async () => {
        const items = await productService.fetchAvailableItems();
        expect(items.length).toBe(2);
        expect(items).toEqual([
            { value: 'a', available: true },
            { value: 'c', available: true },
        ]);
    });
});
