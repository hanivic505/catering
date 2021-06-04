import { IProductService } from "../core/serviceContracts";
export declare class ServiceProxy {
    private _apiUrl;
    ProductService: IProductService;
    constructor(_apiUrl: string);
}
