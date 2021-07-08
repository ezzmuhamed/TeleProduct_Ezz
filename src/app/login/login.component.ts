import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login-model';
import { ProductService } from '../Services/product.service';
import { RegisterServiceService } from '../Services/register-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private service : RegisterServiceService,
    private service2 : ProductService,
    private route : Router) { }

  loginForm : FormGroup;
  logModel : LoginModel;


  ngOnInit() {

     this.logModel =
   {
      email : '',
      password : '',
      rememberMe : false
   }
    this.loginForm = this.fb.group(
      {

        email :'' ,
        password :'',
        rememberMe : false
      });
  }

  Login()
  {
    if(this.loginForm.valid)
    {
      this.valdateLoginModel();
      this.service.UserLogin(this.logModel).subscribe(sucess =>
        {
         this.service2.setMail(this.logModel.email);
          this.route.navigate(['home']);
          console.log(this.service2.getMail());
        },err => {

          console.log(err);
          this.loginForm.reset();
        });
    }

  }
  valdateLoginModel() {

    this.logModel.email = this.loginForm.value.email;
    this.logModel.password = this.loginForm.value.password;
    this.logModel.rememberMe = this.loginForm.value.rememberMe;

   }


}
