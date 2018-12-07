import { Component, OnInit, Input,Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
import {CartService} from '../../../services/cart.service'
@Component({
  selector: 'a-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  inputs: ['book']
})
export class BookComponent implements OnInit {

  
  public book:any;
  constructor(private changeDetector:ChangeDetectorRef,
              private cartService:CartService
              ) { }

  ngOnInit() {
  }
  addToCart(){
    this.cartService.add({
      id:this.book._id,
      price:this.book.price
    });
    
  }
}
