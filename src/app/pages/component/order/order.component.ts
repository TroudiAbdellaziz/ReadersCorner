import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { BookService } from '../../../services/book.service';
import { CartService } from '../../../services/cart.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public orders: Array<string> = [];
  public books: Array<any> = [];
  public form: FormGroup;
  public errored: boolean = false;
  public done: boolean = false;
  public error: String = "";
  public price: string;
  public finalPrice: string;

  public cardNum: AbstractControl;
  public expiration: AbstractControl;
  public cvcode: AbstractControl;
  public address: AbstractControl;
  public book: any;
  public loaded: boolean = false;
  constructor(private fb: FormBuilder, private cartService: CartService,
    private route: ActivatedRoute, private orderService: OrderService, private bookService: BookService) {

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
    if (localStorage.getItem("orders"))
      this.orders = localStorage.getItem("orders").split(":");
    this.price = localStorage.getItem("price");

    this.finalPrice = (parseInt(this.price) + 6).toString();
    console.log(this.orders);

  }

  ngOnInit() {
    let self = this;
    console.log(this.loaded);

    for (var i = 0; i < this.orders.length; i++) {
      this.bookService.getBookById(self.orders[i]).subscribe((res) => {
        console.log(self.orders[i]);
        self.books.push(res.book);
        console.log(self.books);
        this.loaded = true;
      })
    }
  }
  onSubmit(value: any) {
    console.log("here");
    this.errored = false;
    this.done = false;
    let self=this;
    let values = { cardNum: value.cardNum, expiration: value.expiration, cvCode: value.cvcode };
    this.orderService.verifyCard(values).subscribe((res) => {
      if (res.success == false) {
        this.error = "please provide correct payment details";

        this.errored = true;
      } else {
        this.done = true;
        document.documentElement.scrollTop = 0;
        let data = {
          user: localStorage.getItem("user"),
          books: this.orders,
          price: localStorage.getItem("price"),
          sent: false,
          address: value.address
        }
        console.log("there");
        self.orderService.proceedPayment(data).subscribe((res) => {
          if (res.success == false) {
            self.error = "we couldn't submit your order, please try again";
            self.errored = true;
          } else {
            $(".modal").hide();
          }
        })
      }
    });

  }

  removeItem(item: any) {
    console.log("click");
    console.log(item);
    console.log(item.path[2].id);
    $(item.path[3]).remove();

    for (var i = 0; i < this.books.length; i++) {
      if ((item.path[2].id.toString().indexOf(this.books[i]._id) > -1) ||
        (item.path[3].id.toString().indexOf(this.books[i]._id) > -1)) {
        this.price = (parseInt(this.price) - parseInt(this.books[i].price)).toString();
        localStorage.setItem("price", this.price);
        this.finalPrice = (parseInt(this.price) + 6).toString();
        this.books.splice(i, 1);
        this.orders.splice(i, 1);
        localStorage.setItem("orders", this.orders.join(":"));
        console.log(this.books);
        this.cartService.add({ price: "0" });
      }
    }

  }

}
