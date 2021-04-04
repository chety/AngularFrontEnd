import { ProductModel } from './product';
export interface CartItem {
    product : ProductModel;
    quantity: number;
}