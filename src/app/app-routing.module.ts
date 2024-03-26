import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { AllProductsComponent } from './components/allProducts/allproducts.component';
import { AddProductComponent } from './components/allProducts/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'allproducts', component: AllProductsComponent},
  { path: 'add-product', component: AddProductComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
