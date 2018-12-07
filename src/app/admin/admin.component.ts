import { Component, OnInit } from '@angular/core';
import { BookService} from '../services/book.service';
import {OrderService} from '../services/order.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public books:Array<any>;
public orders:Array<any>;
public book:string;
  constructor(private bookService:BookService,
              private orderService:OrderService) { }

  ngOnInit() {
    this.bookService.getBook().subscribe((res)=>this.books=res.lists);
    this.orderService.getOrders().subscribe((res)=>this.orders=res.lists);
    let self=this;
  }
  selectBook(str:string){
    this.book=str;
    console.log(str);
  }
deleteBook(){
  console.log(this.book);
  this.bookService.deleteBook(this.book).subscribe();
}
}
