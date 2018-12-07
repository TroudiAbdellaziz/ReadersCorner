import { Component, OnInit,Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {UserService} from './../../../services/user.service'
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form:FormGroup;
  public fname:AbstractControl;
  public lname:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public cpassword:AbstractControl;
  public errored:boolean = false;
  public error:String='';

  @Input()
  connect:boolean ;
  
  @Output() userConnected = new EventEmitter<boolean>();

  constructor(private fb:FormBuilder, private userService:UserService,
              private router:Router, private changeDetector:ChangeDetectorRef) { 
    this.form = fb.group({
      'fname': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'lname': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'cpassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.fname= this.form.controls['fname'];
    this.lname= this.form.controls['lname'];
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];

    this.cpassword = this.form.controls['cpassword'];

  }

  ngOnInit() {
  }
  public onSubmit(values:Object):void {
    this.errored=false;
    console.log(values);
    this.userService.signup(values).subscribe((res)=>
  
  {
    if (res.success==false){
      this.errored=true;
      this.error="an error has occured while registring, please try again";
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
