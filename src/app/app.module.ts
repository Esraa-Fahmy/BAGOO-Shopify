import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home.component';
import { NavbarComponent } from './components/Home/navbar/navbar.component';
import { SliderComponent } from './components/Home/slider/slider.component';
import { ProductsComponent } from './components/Home/cards/products.component';
import { AboutComponent } from './components/Home/about/about.component';
import { FooterComponent } from './components/Home/footer/footer.component';
import { AllProductsComponent } from './components/allProducts/allproducts.component';
import { AddProductComponent } from './components/allProducts/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetalisComponent } from './components/allProducts/product-detalis/product-detalis.component';
import { ProductItemComponent } from './components/allProducts/product-item/product-item.component';





@NgModule({
  declarations: [
    AppComponent,HomeComponent,  NavbarComponent, SliderComponent, ProductsComponent, AboutComponent, FooterComponent,AllProductsComponent,  AddProductComponent, LoginComponent, ProductDetalisComponent, ProductItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
