import { ProfessionalUserProfile, User } from "../../core";
import { IUserService } from "../../core/serviceContracts";
export declare class UserService implements IUserService {
    private _baseUrl;
    constructor(_baseUrl: string);
    add(user: User): Promise<User>;
    update(user: User): Promise<User>;
    register(user: ProfessionalUserProfile): Promise<User>;
    login(values: {
        email: string;
        password: string;
        rememberMe: boolean;
    }): Promise<string>;
    confirm(code: string): Promise<boolean>;
    loadAll(): Promise<any>;
}
