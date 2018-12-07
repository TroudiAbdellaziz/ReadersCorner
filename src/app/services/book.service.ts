import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(public http: HttpClient) {

  }
  getBook() {

    return this.http.get<any>('http://localhost:3000/books/getBooks');
  }

  getBookById(id) {

    return this.http.get<any>('http://localhost:3000/books/getBookById/' + id);
  }
  addBook(data: object) {

    return this.http.post<any>('http://localhost:3000/books/book', data);
  }
  deleteBook(id:string){
    return this.http.get<any>('http://localhost:3000/books/deleteBook/' + id);
  }
}
