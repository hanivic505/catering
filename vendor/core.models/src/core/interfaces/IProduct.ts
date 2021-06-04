export interface IProduct {
  product: string;
  product_id: string;
  product_image: string;
  product_description: string;
  product_description_long: string;
  price: number;
  price_gross: number;
  price_net: number;
  toppings: ITopping[];
}

export interface ITopping {
  id: string;
  name: string;
  quantity_minimum: number;
  quantity_maximum: number;
  position: number;
  options: IToppingOption[];
}

export interface IToppingOption {
  id: string;
  name: string;
  price: string;
}
