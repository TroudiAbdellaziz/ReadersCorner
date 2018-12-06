import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { 
    
  }
  verifyCard(values:any){
    
     return this.http.post<any>('http://localhost:3000/cards/getCard',values);
  }
}
