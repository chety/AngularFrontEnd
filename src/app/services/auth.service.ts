import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from "../models/login";
import { TokenModel } from "../models/token";
import { Observable } from 'rxjs'
import { SingleResponseModel } from '../models/singleResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "https://localhost:44332/api/auth/login";

  constructor(private httpClient: HttpClient) { }


  login(login: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl, login);
  }

  isAuthenticated(){
    return localStorage.getItem("token") != null;
  }

}
