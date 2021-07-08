import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:"home",
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:"products",
    component: ProductsComponent,
    pathMatch:'full'
  },
  {
    path:"add-product",
    component: AddProductComponent,
    pathMatch:'full'
  },

  {
    path:"login",
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path:'editproduct/:name',
    component: AddProductComponent
  },
  {
    path:"register",
    component: RegisterComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
