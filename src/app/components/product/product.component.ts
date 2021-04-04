import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductModel } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductModel[];
  dataReady: boolean = false;
  filterText: string = "";

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"]);
      } else {
        this.getProducts();
      }
    })
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(response => {
        this.products = response.data;
        setTimeout(() => {
          //faking delay to show loading
          this.dataReady = true;
        }, 2000);
      })
  }

  getProductsByCategory(categoryId: number) {
    this.productService.getProductsByCategory(categoryId)
      .subscribe(response => {
        this.products = response.data;
        setTimeout(() => {
          //faking delay to show loading
          this.dataReady = true;
        }, 2000);
      })
  }

  addToBasket(product: ProductModel) {
    this.cartService.addToCart(product);
    this.toastrService.success("Product Added Successfully", product.productName);
  }

}
