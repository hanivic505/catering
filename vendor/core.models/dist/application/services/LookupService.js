"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupService = void 0;
const axios_1 = require("axios");
class LookupService {
    constructor(_baseUrl, _lookupUrl) {
        this._baseUrl = _baseUrl;
        this._lookupUrl = _lookupUrl;
    }
    loadAll() {
        return axios_1.default.get(`${this._baseUrl}/Registeration/lookUps`, {
            headers: { "X-API-Key": "8B5A7B7F-7C2A-4CE9-BD57-FEFA4824E088" },
        });
    }
}
exports.LookupService = LookupService;
