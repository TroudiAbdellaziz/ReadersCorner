import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'a-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  inputs: ['book']
})
export class BookComponent implements OnInit {
  public book:any;
  constructor() { }

  ngOnInit() {
  }

}
