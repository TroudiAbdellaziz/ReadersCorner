import { Component, OnInit } from '@angular/core';
import { BookService} from '../services/book.service';
import {OrderService} from '../services/order.service';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public form:FormGroup;
  public title:AbstractControl;
  public author:AbstractControl;
  public price:AbstractControl;
  public description:AbstractControl;
  public books:Array<any>;
  public orders:Array<any>;
  public book:string;
  public picture:Array<File>;
  constructor(private fb:FormBuilder,
              private bookService:BookService,
              private orderService:OrderService) { 

                this.form = fb.group({
                  'title': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
                  'author': ['',''],
                  'price': [''],
                  'description': ['']});

                  this.title= this.form.controls['title'];
                  this.author= this.form.controls['author'];
                  this.price = this.form.controls['price'];
                  this.description = this.form.controls['description'];
              }

  ngOnInit() {
    this.bookService.getBook().subscribe((res)=>this.books=res.lists);
    this.orderService.getOrders().subscribe((res)=>this.orders=res.lists);
    let self=this;
  }
  selectBook(str:string){
    this.book=str;
    console.log(str);
  }

  uploadPhoto($event) {
    let input = $event.target;
     this.picture = <Array<File>> $event.target.files;
    
     console.log(this.picture[0].name);
  }

  addBook(values:any){
    console.log(values);
    this.bookService.addPicture("http://localhost:3000/books/addBook", [], this.picture,values).then((result) => {
      console.log(result);
  }, (error) => {
      console.error(error);
  });
  $(".modal").remove()
}
  
deleteBook(){
  console.log(this.book);
  this.bookService.deleteBook(this.book).subscribe();
  $(".modal").hide()
}
}
