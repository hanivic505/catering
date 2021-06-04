"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalUserProfile = void 0;
class ProfessionalUserProfile {
    constructor(id, accountTypeId, countryId, stateId, cityId, profileURL, email, mobile, password, firstName, lastName, genderId, dateOfBirth, nationalityCountryId) {
        this.id = id;
        this.accountTypeId = accountTypeId;
        this.countryId = countryId;
        this.stateId = stateId;
        this.cityId = cityId;
        this.profileURL = profileURL;
        this.email = email;
        this.mobile = mobile;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.genderId = genderId;
        this.dateOfBirth = dateOfBirth;
        this.nationalityCountryId = nationalityCountryId;
    }
}
exports.ProfessionalUserProfile = ProfessionalUserProfile;
