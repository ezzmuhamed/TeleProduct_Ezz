import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegestraionComponent } from './regestraion/regestraion.component';

const routes: Routes = [
  {
    path:" ",
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:"Home",
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"products",
    component:ProductsComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"Registraion",
    component:RegestraionComponent,
    pathMatch:'full'
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
