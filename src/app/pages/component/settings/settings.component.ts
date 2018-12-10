import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service'
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public form:FormGroup;
  public cpassword:AbstractControl;
  public password:AbstractControl;
  public ypassword:AbstractControl;
  public errored:boolean=false;
  public error:String="please provide your true current password";
  constructor(private fb:FormBuilder, private userService:UserService) {
    this.form = fb.group({
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'cpassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'ypassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.cpassword = this.form.controls['cpassword'];
    this.password = this.form.controls['password'];
    this.ypassword = this.form.controls['ypassword'];
   }

  ngOnInit() {
  }
onSubmit(object:any){
  //passwords needs to be hashed before being sent
this.userService.checkpass({password:object.ypassword, id:localStorage.getItem("user"),newpassword:object.password}).subscribe(
(res)=>{
  if (res.status==true){
    $('.modal').remove();
  }else{
    this.errored=true;
  }
}
);
}
}
