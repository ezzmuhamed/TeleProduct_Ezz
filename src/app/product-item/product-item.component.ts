import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';
import {Products} from '../products.model'


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor( private service:ProductsService) { }

  ngOnInit() {
    this.service.Product=
    {
    id:0,
    name:null,
    desc:null,
    imageURl:null,
    status:null
    }
  }

  submit(form:NgForm)
  {
    if(this.service.Product.id==0){
      this.service.postproduct().subscribe(res=>{
        this.service.getAllProducts()
      },
      err=>{
        console.log(err)
      })
    }
    else{
      this.service.putproduct().subscribe(res=>{
        this.service.getAllProducts()
      },
      err=>{
        console.log(err)
      })
    }
  
    }
}
