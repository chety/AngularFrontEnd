import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from 'src/app/models/productResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsApiUrl = "https://localhost:44332/api/products";
  constructor(private httpClient : HttpClient) { }

  getProducts() : Observable<ProductResponse>{
    return this.httpClient.get<ProductResponse>(this.productsApiUrl)
  }
}
