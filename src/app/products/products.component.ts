import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {Products} from '../products.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:ProductsService) { } ;
  //console.log(Products);}

  ngOnInit() {
    this.service.getAllProducts()
    //console.log(Products);
  }
  fillData(item){
    this.service.Product.id=item.id;
    this.service.Product.name=item.name;
    this.service.Product.desc=item.desc;
    this.service.Product.imageURl=item.imageURl;
    this.service.Product.status=item.status;
  }
  delete(id){
    this.service.deleteproduct(id).subscribe(res=>{
      this.service.getAllProducts()
    })
  }

}
