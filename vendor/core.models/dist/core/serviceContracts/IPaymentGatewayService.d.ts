export interface IPaymentIntent {
    client_secret: string;
}
export interface IPaymentGatewayService {
    addProduct(): Promise<any>;
    addPlan(): Promise<any>;
    createCustomer(): Promise<any>;
    addSubscription(): Promise<any>;
    getPaymentIntent(amount: number): Promise<IPaymentIntent>;
}
