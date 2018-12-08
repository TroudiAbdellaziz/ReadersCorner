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
  addPicture(url: string, params: Array<string>, files: Array<File>, values:any){
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
    formData.append("title",values.title);

    formData.append("author",values.author);
    formData.append("price",values.price);
    formData.append("author",values.author);
    formData.append("description",values.description);
    console.log(files); 
         for(var i = 0; i < files.length; i++) {
      formData.append("uploads", files[i], files[i].name);
  }
      console.log(formData.get("uploads"));
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                  resolve(JSON.parse(xhr.response));
              } else {
                  reject(xhr.response);
              }
          }
      }
      xhr.open("POST", url, true);
      xhr.send(formData);
  });
  }
  addBook(data: object) {
    return this.http.post<any>('http://localhost:3000/books/book', data);
  }
  deleteBook(id:string){
    return this.http.get<any>('http://localhost:3000/books/deleteBook/' + id);
  }
}
