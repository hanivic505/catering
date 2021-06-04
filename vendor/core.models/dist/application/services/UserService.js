"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const axios_1 = require("axios");
class UserService {
    constructor(_baseUrl) {
        this._baseUrl = _baseUrl;
    }
    add(user) {
        return axios_1.default.post(`${this._baseUrl}/users`, user);
    }
    update(user) {
        return axios_1.default.patch(`${this._baseUrl}/users/${user.id}`, user);
    }
    register(user) {
        return axios_1.default.post(`${this._baseUrl}/Registerations/Register`, user);
    }
    login(values) {
        return axios_1.default.post(`${this._baseUrl}/Authentication/logIn`, values);
    }
    confirm(code) {
        return axios_1.default.post(`${this._baseUrl}/Registerations/IsValidCode`, code);
    }
    loadAll() {
        return axios_1.default.get(`${this._baseUrl}/users`);
    }
}
exports.UserService = UserService;
