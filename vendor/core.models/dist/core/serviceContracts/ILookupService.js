"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTypeEnum = exports.AcountTypePlansSlugEnum = exports.PlanSlugEnum = exports.ProfileSlugEnum = void 0;
var ProfileSlugEnum;
(function (ProfileSlugEnum) {
    ProfileSlugEnum["professional"] = "personal-professional-profile";
    ProfileSlugEnum["excutive"] = "personal-executive-profile";
    ProfileSlugEnum["recruiter"] = "personal-recruiter-profile";
    ProfileSlugEnum["consultant"] = "personal-consultant-profile";
    ProfileSlugEnum["recruitment_agency"] = "business-recruitment-agency-profile";
    ProfileSlugEnum["consultancy_firm"] = "business-consultancy-firm-profile";
    ProfileSlugEnum["company"] = "business-company-profile";
})(ProfileSlugEnum = exports.ProfileSlugEnum || (exports.ProfileSlugEnum = {}));
var PlanSlugEnum;
(function (PlanSlugEnum) {
    PlanSlugEnum["LEVELA_1_LEVELB_1_LEVELC_1"] = "levela-1-levelb-1-levelc-1";
    PlanSlugEnum["LEVELA_2_LEVELB_1_LEVELC_1"] = "levela-2-levelb-1-levelc-1";
    PlanSlugEnum["LEVELA_3_LEVELB_1_LEVELC_1"] = "levela-3-levelb-1-levelc-1";
    PlanSlugEnum["LEVELA_1_LEVELB_2_LEVELC_1"] = "levela-1-levelb-2-levelc-1";
    PlanSlugEnum["LEVELA_2_LEVELB_2_LEVELC_1"] = "levela-2-levelb-2-levelc-1";
    PlanSlugEnum["LEVELA_3_LEVELB_2_LEVELC_1"] = "levela-3-levelb-2-levelc-1";
})(PlanSlugEnum = exports.PlanSlugEnum || (exports.PlanSlugEnum = {}));
var AcountTypePlansSlugEnum;
(function (AcountTypePlansSlugEnum) {
    AcountTypePlansSlugEnum["Personal"] = "levelb-1";
    AcountTypePlansSlugEnum["Business"] = "levelb-1";
})(AcountTypePlansSlugEnum = exports.AcountTypePlansSlugEnum || (exports.AcountTypePlansSlugEnum = {}));
var AccountTypeEnum;
(function (AccountTypeEnum) {
    AccountTypeEnum["Business"] = "business-account";
    AccountTypeEnum["Personal"] = "personal-account";
})(AccountTypeEnum = exports.AccountTypeEnum || (exports.AccountTypeEnum = {}));
