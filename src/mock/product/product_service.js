class ProductService {
    constructor(productClient) {
        // 의존성 역전
        //  -> 클래스 내부에서 스스로의 의존을 결정해서 사용함
        //  -> dependency injection에 어긋남
        //  -> 필요한 것은 외부에서 받아오는 형식으로 수정함
        this.productClient = productClient;
    }

    fetchAvailableItems() {
        return this.productClient
            .fetchItems()
            .then((items) => items.filter((item) => item.available));
    }
}

module.exports = ProductService;
