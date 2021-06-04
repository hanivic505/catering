import { ProfessionalUserProfile } from "../../core/models";
import { User } from "../../core";
export declare enum NotificationChannel {
    Email = "Email",
    SMS = "SMS",
    Other = "Other"
}
export interface ISelectProfile {
    userId: string;
    profileCategoryId: string;
    profileCategoryLevelId?: string;
    specialityId?: string;
}
export interface ISelectPlan {
    userId: string;
    planId: string;
}
export interface IVerificationRequest {
    userId: string;
    recipient: string;
    code?: string;
    notificationChannelType: NotificationChannel;
}
export interface IRegistrationService {
    register(user: ProfessionalUserProfile): Promise<User>;
    isValidCode(code: IVerificationRequest): Promise<boolean>;
    selectProfile(selectedProfile: ISelectProfile): Promise<any>;
    selectPlan(selectedPlan: ISelectPlan): Promise<any>;
    sendVerificationCode(request: IVerificationRequest): Promise<any>;
}
