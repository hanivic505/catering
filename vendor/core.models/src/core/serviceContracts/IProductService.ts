import { IProduct } from "../../core";

export interface IProductService {
  add(product: IProduct): Promise<IProduct>;
  getAll(): Promise<IProduct[]>;
}
