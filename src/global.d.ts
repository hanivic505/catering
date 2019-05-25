interface ProductJSON {
    product: string;
    product_id: string;
    product_image: string;
    product_description: string;
    product_description_long: string;
    price: number;
    price_gross: number;
    price_net: number;
    product_variation_id: number;
    person_number: number;
    toppings: ToppingJSON[];
}

interface ToppingJSON {
    id: number;
    name: string;
    quantity_minimum: number;
    quantity_maximum: number;
    position: number;
    options: Options[];
}

interface Option {
    id: string;
    name: string;
    price: string;
}
