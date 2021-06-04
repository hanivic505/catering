import { IProduct } from "../../core";
export interface IProductService {
    add(product: IProduct): Promise<IProduct>;
    getAll(): Promise<IProduct[]>;
    get(id: string): Promise<IProduct | null>;
}
