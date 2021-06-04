import { ProfessionalUserProfile } from "../../core/models";
import { User } from "../../core";
export interface IUserService {
    loadAll(): Promise<any>;
    register(user: ProfessionalUserProfile): Promise<any>;
    confirm(code: string): Promise<boolean>;
    login(values: {
        email: string;
        password: string;
        rememberMe: boolean;
    }): Promise<string>;
    add(user: User): Promise<User>;
    update(user: User): Promise<User>;
}
