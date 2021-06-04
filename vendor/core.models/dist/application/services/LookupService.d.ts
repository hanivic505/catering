import { ILookups, ILookupService } from "../../core/serviceContracts";
export declare class LookupService implements ILookupService {
    private _baseUrl;
    private _lookupUrl;
    constructor(_baseUrl: string, _lookupUrl: string);
    loadAll(): Promise<ILookups>;
}
