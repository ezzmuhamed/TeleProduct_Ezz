import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../models/login-model';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http : HttpClient) { }

  baseUrl = 'http://localhost:5067/Account/';

  headers =
  {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  Register(reg:RegisterModel):Observable<RegisterModel>
  {
    return this.http.post<RegisterModel>(this.baseUrl + 'Register',reg,this.headers).pipe();
  }

  UserLogin(log : LoginModel):Observable<LoginModel>
  {
    return this.http.post<LoginModel>(this.baseUrl + 'Login',log,this.headers).pipe();
  }
  getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl + 'getAllProducts',this.headers).pipe();
  }



}
