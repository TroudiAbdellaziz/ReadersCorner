import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(public http :HttpClient) {
   
   }
  getBook(){
//  return this.http.get<any>('http://54.38.33.183:8081/api/livres');

return this.http.get<any>('http://localhost:3000/books/getBooks');
  }

  getBookById(id){
    //  return this.http.get<any>('http://54.38.33.183:8081/api/livres');
    
    return this.http.get<any>('http://localhost:3000/books/getBookById/'+id);
      }
/*  addBook(){
    let data ={id:"5bf69e31d612007947d4888d", num:250};
   return this.http.post<any>('http://localhost:3000/books/book',data);
  }*/
}
