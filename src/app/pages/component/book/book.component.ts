import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../../../services/cart.service'
@Component({
  selector: 'a-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  inputs: ['book']
})
export class BookComponent implements OnInit {


  public book: any;
  public isConnected: Boolean;
  constructor(private changeDetector: ChangeDetectorRef,
    private cartService: CartService
  ) { }

  ngOnInit() {
  }
  addToCart() {
    if (localStorage.getItem("user")) {
      this.cartService.add({
        id: this.book._id,
        price: this.book.price
      });
    } else {
      this.cartService.notif(true);
    }

  }
}
