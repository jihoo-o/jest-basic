const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
jest.mock('../product_client');

describe('ProductService', () => {
    const fetchItems = jest.fn(async () => [
        { value: 'a', available: true },
        { value: 'b', available: false },
        { value: 'c', available: true },
    ]);

    ProductClient.mockImplementation(() => {
        return {
            fetchItems,
        };
    });

    let productService;

    beforeEach(() => {
        productService = new ProductService();
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
