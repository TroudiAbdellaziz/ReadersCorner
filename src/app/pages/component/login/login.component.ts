import { Component, OnInit, ChangeDetectorRef} from '@angular/core';

import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public errored:boolean=false;
  public error:String="";
  constructor(private fb:FormBuilder,
              private userService:UserService,
              private router:Router,
              private changeDetector:ChangeDetectorRef
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
  this.userService.login({email:email,password:password}).subscribe((res)=>
{
  if (res.success==false){
    this.errored=true;
    this.error=res.message;
  }else {
    localStorage.setItem("user",res.user);
    localStorage.setItem("connected","true");
    this.changeDetector.markForCheck();             
    this.router.navigate(['/starter']);
  }
});
}
}
