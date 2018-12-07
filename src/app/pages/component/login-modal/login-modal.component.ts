import { Component, OnInit, ChangeDetectorRef, Input,Output, EventEmitter} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service'
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})

export class LoginModalComponent implements OnInit {
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public errored:boolean=false;
  public error:String="";

  @Input()
  connect:boolean ;
  
  @Output() userConnected = new EventEmitter<boolean>();
  constructor(private fb:FormBuilder,
              private userService:UserService,
              private router:Router,
              private changeDetector:ChangeDetectorRef
            ) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
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
    localStorage.setItem("user",res.user._id);
    localStorage.setItem("connected","true");
    this.changeDetector.markForCheck();  
    console.log(this.userConnected.emit(true));
    console.log(localStorage.getItem("user"));
    $('.modal').hide();
  }
  
});
}
openRegister(){
  $('.modal').hide();
}
}
