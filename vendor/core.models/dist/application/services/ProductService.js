"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const products_1 = require("../../mocks/products");
class ProductService {
    constructor(apiUrl) { }
    add(product) {
        throw new Error("Method not implemented.");
    }
    getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products_1.productList);
            }, 300);
        });
    }
    get(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products_1.productList.filter((p) => p.product_id === id)[0]);
            }, 300);
        });
    }
}
exports.ProductService = ProductService;
