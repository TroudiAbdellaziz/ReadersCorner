import { Component, OnInit } from '@angular/core';

import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  constructor(private fb:FormBuilder,
              private userService:UserService  
            ) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'type': [''],
      'password': ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/)])]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
   }

  ngOnInit() {
  }
onSubmit(email:string, password:string){
  console.log("here");
  console.log(email+" "+password);
  this.userService.login({email:email,password:password}).subscribe((res)=>console.log(res));
}
}
