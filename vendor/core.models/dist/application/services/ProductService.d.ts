import { IProduct, IProductService } from "core";
export declare class ProductService implements IProductService {
    constructor(apiUrl: string);
    add(product: IProduct): Promise<IProduct>;
    getAll(): Promise<IProduct[]>;
    get(id: string): Promise<IProduct | null>;
}
