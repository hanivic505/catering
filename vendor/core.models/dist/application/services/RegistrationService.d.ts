import { IRegistrationService, ISelectPlan, ISelectProfile, IVerificationRequest, ProfessionalUserProfile, User } from "../../core";
export declare class RegistrationService implements IRegistrationService {
    private _baseUrl;
    constructor(_baseUrl: string);
    route: string;
    register(user: ProfessionalUserProfile): Promise<User>;
    isValidCode(code: IVerificationRequest): Promise<boolean>;
    selectProfile(selectedProfile: ISelectProfile): Promise<any>;
    selectPlan(selectedPlan: ISelectPlan): Promise<any>;
    sendVerificationCode(request: IVerificationRequest): Promise<any>;
}
