"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProxy = void 0;
const services_1 = require("./services");
class ServiceProxy {
    constructor(_apiUrl) {
        this._apiUrl = _apiUrl;
        this.ProductService = new services_1.ProductService(this._apiUrl);
    }
}
exports.ServiceProxy = ServiceProxy;
