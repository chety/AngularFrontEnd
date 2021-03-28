import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductModel[];
  dataReady: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(response => {
        this.products = response.data;
        setTimeout(() => {
          //faking delay to show loading
          this.dataReady = true;
        }, 5000);
      })
  }

}
