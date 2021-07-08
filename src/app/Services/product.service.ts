import { Injectable } from '@angular/core';
import { Product } from '../models/product-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  logMail : string ;
  constructor(private http : HttpClient) { }
  baseUrl = 'http://localhost:5067/Account/';

  headers =
  {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    }),
   // withCredentials:true ,
  };

  getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl + 'getAllProducts',this.headers).pipe();
  }
  addProducts(model:Product):Observable<Product>
  {
    return this.http.post<Product>(this.baseUrl + 'AddProduct',model,this.headers).pipe();
  }

  EditProduct(name:string):Observable<Product>
  {
    return this.http.get<Product>(this.baseUrl + 'EditProduct/' + name,this.headers).pipe();
  }

  DeleteProduct(name:string):Observable<Product>
  {
    return this.http.delete<Product>(this.baseUrl + 'DeleteProduct/'+ name ,this.headers).pipe();
  }

  addProducts2(formData : FormData)
  {
    return this.http.post(this.baseUrl + 'AddProduct2',formData ,{ withCredentials:true}).pipe();
  }
  setMail(data){this.logMail = data;}
  getMail(){return this.logMail ;}

}


