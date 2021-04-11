import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ToastrModule} from "ngx-toastr"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { CommonModule } from '@angular/common';

import { AppRoutingRoutingModule } from './app-routing.module';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterProductsPipe,
    CartSummaryComponent,
    CartComponent,
    ProductAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
