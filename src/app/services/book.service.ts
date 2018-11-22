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
  addBook(){
    let data ={
      title:"The stranger",
      author:'Albert Camus',
      price:15,
      nbSells:50,
      language: ["fr","en"],
      picture: 'thestranger.jpg',
      soldOut: false,
      description:"The title character of The Stranger is Meursault, a Frenchman who lives in Algiers (a pied-noir). The novel is famous for its first lines: “Mother died today. Or maybe it was yesterday, I don’t know.” They capture Meursault’s anomie briefly and brilliantly."
      };
   return this.http.post<any>('http://localhost:3000/books/book',data);
  }
}
