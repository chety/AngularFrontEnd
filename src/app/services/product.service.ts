import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse } from '../models/listResponse';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsApiUrl = "https://localhost:44332/api/products";
  constructor(private httpClient : HttpClient) { }

  getProducts() : Observable<ListResponse<ProductModel>>{
    return this.httpClient.get<ListResponse<ProductModel>>(this.productsApiUrl)
  }

  getProductsByCategory(categoryId: number) : Observable<ListResponse<ProductModel>>{
    const url = `${this.productsApiUrl}/getbycategory?categoryId=${categoryId}`
    return this.httpClient.get<ListResponse<ProductModel>>(url)
  }
}
