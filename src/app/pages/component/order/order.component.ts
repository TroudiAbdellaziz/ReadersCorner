import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { BookService } from '../../../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public form:FormGroup;
  public errored:boolean=false;
  public done:boolean=false;
  public error:String="";
  
  public cardNum:AbstractControl;
  public expiration:AbstractControl;
  public cvcode:AbstractControl;
  public address:AbstractControl;
  public book:any;
  public loaded:boolean=false;
  constructor(private fb:FormBuilder,
    private route: ActivatedRoute,private orderService: OrderService, private bookService: BookService) {

      this.form = fb.group({
        'cardNum': [''],
        'expiration': [''],
        'cvcode': [''],
        'address': ['']
      });
      this.cardNum = this.form.controls['cardNum'];
      this.cvcode = this.form.controls['cvcode'];
      this.address = this.form.controls['address'];
      this.expiration = this.form.controls['expiration'];

  }

  ngOnInit() {
    let self = this;
    console.log(this.loaded);
    this.route.params.subscribe((params) => {
    this.bookService.getBookById(params['id']).subscribe((res)=>{
      self.book=res.book;
      console.log(res);
      self.loaded=true;
    })
    
    });
  }
  onSubmit(value:any){
    console.log("here");
    this.errored=false;
    this.done=false;
    let values={cardNum:value.cardNum,expiration:value.expiration,cvCode:value.cvcode};
    this.orderService.verifyCard(values).subscribe((res)=>{
      if(res.success==false){
        this.error="please provide correct payment details";
        this.errored=true;
      }else{
        this.done=true;
        document.documentElement.scrollTop = 0;
      }
    });
  }

}
