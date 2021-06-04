export declare enum ProfileSlugEnum {
    professional = "personal-professional-profile",
    excutive = "personal-executive-profile",
    recruiter = "personal-recruiter-profile",
    consultant = "personal-consultant-profile",
    recruitment_agency = "business-recruitment-agency-profile",
    consultancy_firm = "business-consultancy-firm-profile",
    company = "business-company-profile"
}
export declare enum PlanSlugEnum {
    LEVELA_1_LEVELB_1_LEVELC_1 = "levela-1-levelb-1-levelc-1",
    LEVELA_2_LEVELB_1_LEVELC_1 = "levela-2-levelb-1-levelc-1",
    LEVELA_3_LEVELB_1_LEVELC_1 = "levela-3-levelb-1-levelc-1",
    LEVELA_1_LEVELB_2_LEVELC_1 = "levela-1-levelb-2-levelc-1",
    LEVELA_2_LEVELB_2_LEVELC_1 = "levela-2-levelb-2-levelc-1",
    LEVELA_3_LEVELB_2_LEVELC_1 = "levela-3-levelb-2-levelc-1"
}
export declare enum AcountTypePlansSlugEnum {
    Personal = "levelb-1",
    Business = "levelb-1"
}
export declare enum AccountTypeEnum {
    Business = "business-account",
    Personal = "personal-account"
}
export interface ILookupItem {
    description: string;
    id: string;
}
export interface ICountryLookupItem {
    description: string;
    id: string;
    states: {
        description: string;
        id: string;
        country: string;
        countryId: string;
        cities: {
            description: string;
            id: string;
            state: string;
            stateId: string;
        }[];
    }[];
}
export interface IProfileTypesLookupItem {
    accountTypeId: string;
    description: "Executive" | "Consultant" | "Professional" | "Recruiter";
    id: string;
    slug: string;
    profileTypeLevels: {
        description: string;
        id: string;
        profileTypeId: string;
    }[];
    specialitys: {
        description: string;
        id: string;
        profileTypeId: string;
    }[];
}
export interface IFeatureLookupItem extends ILookupItem {
    description: string;
    displayName: string;
    id: string;
    isVisible: boolean;
    plans: IPlanLookupItem[];
    slug: string | null;
}
export interface IPlanLookupItem extends ILookupItem {
    id: string;
    description: string;
    displayName: string;
    price: number;
    slug: string | null;
    features: IFeatureLookupItem[];
}
export interface IAccountTypeLookupItem extends ILookupItem {
    slug: string;
    profileTypes: IProfileTypesLookupItem[];
}
export interface ILookups {
    accountTypes: IAccountTypeLookupItem[];
    countrys: ICountryLookupItem[];
    genders: ILookupItem[];
    plans: IPlanLookupItem[];
    profileTypes: IProfileTypesLookupItem[];
    companySizes: any[];
    companyTypes: any[];
    industryTypes: any[];
}
export interface ILookupService {
    loadAll(): Promise<ILookups>;
}
