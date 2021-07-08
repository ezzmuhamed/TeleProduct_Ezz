import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { userInfo } from 'os';
import { Product } from '../models/product-model';
import { ProductService } from '../Services/product.service';
//import { LoginModel } from '../models/login-model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service : ProductService,
    private router : Router) { }
  products : Product[];
  product : Product ;
  urlImage:string ;
  admin :boolean ;

  ngOnInit() {
    this.products = null ;
    this.product = null ;
    this.urlImage = 'assets/images/' ;
    this.admin = false;
    this.service.getAllProducts().subscribe(list =>
      {
        this.products = list ;
        if(this.admin === true){this.admin = true;}


      },err=>console.log(err));
      if(this.service.getMail()==="ezzmohamed541@gmail.com"){this.admin = true ;}
      console.log(this.admin);

      if(this.admin === true){this.admin = true;}

  }


  EditProduct(name:string)
  {

    this.router.navigate(['/editproduct',name]);
  }
  Deleteproduct(name:string)
  {
    console.log("beforedelete");
    this.service.DeleteProduct(name).subscribe(x =>
      {
        alert("Your Item deleted Succesfully ");
        this.service.getAllProducts().subscribe(list =>
          {
            this.products = list ;

          },err=>console.log(err));


      },err => console.log(err));

  }
}
