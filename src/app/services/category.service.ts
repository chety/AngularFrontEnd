import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category';
import { ListResponse } from '../models/listResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesApiUrl = "https://localhost:44332/api/categories";
  constructor(private httpClient : HttpClient) { }

  getCategories() : Observable<ListResponse<CategoryModel>>{
    return this.httpClient.get<ListResponse<CategoryModel>>(this.categoriesApiUrl)
  }
}
