import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from '../../services/cart.service';
import { ProductModel } from '../../models/product';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems: CartItem[];
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.getItems();
  }
  
  getItems(){
      this.cartItems = this.cartService.listCart();  
  }

  removeItem(productId: number){
    this.cartService.removeProduct(productId);
  }
}
