import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest: HttpRequest<any> = request.clone({ 
      headers: request.headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`) 
    });
    return next.handle(newRequest);
  }
}
