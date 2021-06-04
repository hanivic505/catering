"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationService = void 0;
const axios_1 = require("axios");
class RegistrationService {
    constructor(_baseUrl) {
        this._baseUrl = _baseUrl;
        this.route = `${this._baseUrl}/Registeration`;
    }
    register(user) {
        return axios_1.default.post(`${this.route}`, user, {
            headers: { "X-API-Key": "8B5A7B7F-7C2A-4CE9-BD57-FEFA4824E088" },
        });
    }
    isValidCode(code) {
        return axios_1.default.post(`${this.route}/isValidCode`, code, {
            headers: { "X-API-Key": "8B5A7B7F-7C2A-4CE9-BD57-FEFA4824E088" },
        });
    }
    selectProfile(selectedProfile) {
        return axios_1.default.post(`${this.route}/profiles`, selectedProfile, {
            headers: { "X-API-Key": "8B5A7B7F-7C2A-4CE9-BD57-FEFA4824E088" },
        });
    }
    selectPlan(selectedPlan) {
        return axios_1.default.post(`${this.route}/plans`, selectedPlan, {
            headers: { "X-API-Key": "8B5A7B7F-7C2A-4CE9-BD57-FEFA4824E088" },
        });
    }
    sendVerificationCode(request) {
        return axios_1.default.post(`${this.route}/sendVerificationCode`, request, {
            headers: { "X-API-Key": "8B5A7B7F-7C2A-4CE9-BD57-FEFA4824E088" },
        });
    }
}
exports.RegistrationService = RegistrationService;
