class StubProductClient {
    async fetchItems() {
        return [
            { value: 'a', available: true },
            { value: 'b', available: false },
            { value: 'c', available: true },
        ];
    }
}

module.exports = StubProductClient;
