import { Injectable, Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() { }
  add(object:any){
    this.change.emit(object);
  }
}
