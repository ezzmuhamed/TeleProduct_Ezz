import { Injectable } from '@angular/core';
import { Products } from './products.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string = "http://localhost:49464/api/Products"
  product:Products[];
  Product:Products

  constructor(private http:HttpClient) { }

  getAllProducts()
  {
    this.http.get(this.url).toPromise().then(
      res =>
      {
        this.product = res as Products[];
        //console.log(this.product);
      }
    )
  }
  postproduct()
  {
   // console.log(this.Product);
   return this.http.post(this.url,this.Product);
       
  }
  putproduct()
  {
   // console.log(this.Product);
   return this.http.put(this.url+" / "+this.Product.id,this.Product);
       
  }
  deleteproduct(id){
    return this.http.delete(this.url+"/"+id);
  }

}
