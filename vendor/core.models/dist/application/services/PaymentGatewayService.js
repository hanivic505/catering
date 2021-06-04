"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentGatewayService = void 0;
const axios_1 = require("axios");
class PaymentGatewayService {
    constructor(_baseUrl) {
        this._baseUrl = _baseUrl;
        this.apiRoute = "";
        this.apiRoute = `${_baseUrl}/PaymentGateway`;
    }
    addProduct() {
        throw new Error("Method not implemented.");
    }
    addPlan() {
        throw new Error("Method not implemented.");
    }
    createCustomer() {
        throw new Error("Method not implemented.");
    }
    addSubscription() {
        throw new Error("Method not implemented.");
    }
    getPaymentIntent(amount) {
        return axios_1.default.post(`${this.apiRoute}/createPaymentIntent?amount=${amount}`, null, {
            headers: { "X-API-Key": "8B5A7B7F-7C2A-4CE9-BD57-FEFA4824E088" },
        });
    }
}
exports.PaymentGatewayService = PaymentGatewayService;
