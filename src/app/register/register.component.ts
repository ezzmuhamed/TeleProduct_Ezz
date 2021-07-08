import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from '../models/register-model';
import { RegisterServiceService } from '../Services/register-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb : FormBuilder,
    private service : RegisterServiceService) { }

  userForm:FormGroup ;
  reg :RegisterModel;

  ngOnInit() {
    this.reg =
    {
      userName : '',
      email : '',
      password : ''
    }
    this.userForm = this.fb.group(
      {
        userName : ['' , Validators.required],
        email :['' , Validators.required],
        password :['' , [Validators.required,Validators.minLength(6)]]
      });
  }
  register()
  {
    if(this.userForm.valid)
    {
      this.valdateRegisterModel();
      this.service.Register(this.reg).subscribe(sucess =>
        {
          alert("Registeration sucess");
        },err => console.log(err));
    }
    this.userForm.reset();
  }
  valdateRegisterModel() {
    this.reg.userName = this.userForm.value.userName;
    this.reg.email = this.userForm.value.email;
    this.reg.password = this.userForm.value.password;

   }

}
