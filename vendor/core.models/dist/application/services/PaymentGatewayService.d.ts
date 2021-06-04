import { IPaymentGatewayService, IPaymentIntent } from "../../core";
export declare class PaymentGatewayService implements IPaymentGatewayService {
    private _baseUrl;
    private apiRoute;
    constructor(_baseUrl: string);
    addProduct(): Promise<any>;
    addPlan(): Promise<any>;
    createCustomer(): Promise<any>;
    addSubscription(): Promise<any>;
    getPaymentIntent(amount: number): Promise<IPaymentIntent>;
}
