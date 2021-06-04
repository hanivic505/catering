import { IProduct, IProductService } from "core";
import { productList } from "../../mocks/products";

export class ProductService implements IProductService {
  constructor(apiUrl: string) {}
  add(product: IProduct): Promise<IProduct> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<IProduct[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList);
      }, 300);
    });
  }
}
