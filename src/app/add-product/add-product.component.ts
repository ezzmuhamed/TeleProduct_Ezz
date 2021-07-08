import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditProductModel } from '../models/EditProductModel';
import { Product } from '../models/product-model';
import { ProductService } from '../Services/product.service';
import * as $ from 'jquery' ;
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private service:ProductService,
    private activeRoute : ActivatedRoute ) { }
    userForm :FormGroup;
    addproduct:Product;
    productData:Product;
    productList :Product[];
    editProductData :EditProductModel ;
    id: number;
    img : File;
    urlImage : string
    admin : boolean;

  ngOnInit() {
    this.id = null ;
    this.productData = null ;
    this.img = null ;
    this.urlImage = 'assets/images/user.jpg';
    this.admin = false ;
    this.addproduct =
    {

      name:'',
      desc:'',
      pic:'',
      stauts:0
    }
    this.userForm = this.fb.group(
      {

        name :'' ,
        desc :'' ,
        pic :'' ,
        stauts : 0

      });
      this.activeRoute.paramMap.subscribe(param =>
        {
          var name = param.get('name');
          if(name)
          {
            this.service.EditProduct(name).subscribe(x=>
              {
                  this.productData = x ;
                  this.AddProductData();

              },err => console.log(err));
              this.urlImage = 'assets/images/products/' + this.productData.pic;

          };
        })


  }
  AddProductData() {
    if(this.productData !== null)
    {
      this.userForm.patchValue({
        name :this.productData.name,
        desc :this.productData.desc ,
        pic :this.productData.pic,
        //stauts :this.productData.stauts
      });
      this.urlImage = 'assets/images/products/' + this.productData.pic;
      if(this.service.getMail()==="ezzmohamed541@gmail.com"){this.admin = true ;}

    }
  }
  AddProduct()
  {

      if(this.userForm.valid)
      {
         if(this.productData === null)
         {

        this.addproduct.name = this.userForm.value.name ;
        this.addproduct.desc = this.userForm.value.desc ;
        this.addproduct.pic = this.userForm.value.pic ;
        this.addproduct.stauts = this.userForm.value.stauts ;

        this.service.addProducts(this.addproduct).subscribe(s=>
          {
           alert("successful adding");
          },err=>console.log(err));
          this.userForm.reset();
          if(this.service.getMail()==="ezzmohamed541@gmail.com"){this.admin = true ;}

      }
      else{

        console.log(this.userForm.value.name);
        this.service.DeleteProduct(this.userForm.value.name).subscribe(x=>
          {
            console.log(x);
          },err=>console.log(err));
          this.addproduct.name = this.userForm.value.name ;
          this.addproduct.desc = this.userForm.value.desc ;
          this.addproduct.pic = this.userForm.value.pic ;
          this.addproduct.stauts = this.userForm.value.stauts ;

          this.service.addProducts(this.addproduct).subscribe(s=>
            {
             alert("successful Editing");
            },err=>console.log(err));
            this.userForm.reset();
            if(this.service.getMail()==="ezzmohamed541@gmail.com"){this.admin = true ;}

      }
      this.service.getAllProducts();
      if(this.admin === true){this.admin = true;}

    }


  }
  HandleFiles(event:any){
    if(event.target.files !== null && event.target.files.length>0)
    {
      this.img = event.target.files[0];
      const reader = new FileReader();
      const csv: string = reader.result as string;
      reader.onload = function(e)
      {
         $('#image').attr('src',e.target.result as string);
      }
      reader.readAsDataURL(this.img);
    }
   else
   {
     this.img = null ;
   }


  }

  AddProductImg()
  {

      if(this.userForm.valid)
      {
        const fd = new FormData();
        if(this.productData === null)
         {


       fd.append('name',this.userForm.value.name);
       fd.append('desc',this.userForm.value.desc);
       fd.append('pic',this.img);
       fd.append('stauts',this.userForm.value.stauts);
        this.service.addProducts2(fd).subscribe(s=>
          {
           alert("successful adding");
          },err=>console.log(err));
          this.urlImage = 'assets/images/products/' + this.productData.pic;
          alert("successful adding");
          this.userForm.reset();
          if(this.service.getMail()==="ezzmohamed541@gmail.com"){this.admin = true ;}
          this.service.getAllProducts();

      }
      else{

        console.log(this.userForm.value.name);
        this.service.DeleteProduct(this.userForm.value.name).subscribe(x=>
          {
            console.log(x);
          },err=>console.log(err));
          fd.append('name',this.userForm.value.name);
          fd.append('desc',this.userForm.value.desc);
          fd.append('pic',this.img);
          fd.append('stauts',this.userForm.value.stauts);
           this.service.addProducts2(fd).subscribe(s=>
             {
              alert("successful Editing");
             },err=>console.log(err));
             this.urlImage = 'assets/images/products/' + this.productData.pic;
             alert("successful Editing");
             this.userForm.reset();
             if(this.service.getMail()==="ezzmohamed541@gmail.com"){this.admin = true ;}
             this.service.getAllProducts();

      }


    }
}
}
