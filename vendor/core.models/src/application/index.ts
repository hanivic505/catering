import { IProductService } from "../core/serviceContracts";
import { ProductService } from "./services";

export class ServiceProxy {
  public ProductService: IProductService;

  constructor(private _apiUrl: string) {
    this.ProductService = new ProductService(this._apiUrl);
  }
}
