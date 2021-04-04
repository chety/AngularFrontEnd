import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';
import { ProductModel } from '../models/product';
import { CartItem } from 'src/app/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  addToCart(product: ProductModel) {
    const item = CartItems.find((item: CartItem) => item.product.productId === product.productId);
    if (item) {
      item.quantity++;
    } else {
      CartItems.push({ product, quantity: 1 })
    }
  }

  listCart() {
    return CartItems;
  }

  removeProduct(productId: number) {
    const itemIndex = CartItems.findIndex(item => item.product.productId === productId);
    CartItems.splice(itemIndex, 1);
  }
  constructor() { }
}
