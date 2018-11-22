import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http :HttpClient) {

   }
  login(data:any){
    console.log("logging in");
    return this.http.post<any>('http://localhost:3000/user/login',data);
  }
  signup(data:any){
    console.log("signing up");
      return this.http.post<any>('http://localhost:3000/user/signup',data);  
  }
}
