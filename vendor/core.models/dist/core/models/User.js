"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, profileURL, role, email, password, mobile, plan, planId) {
        this.id = id;
        this.profileURL = profileURL;
        this.role = role;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
        this.plan = plan;
        this.planId = planId;
    }
}
exports.User = User;
