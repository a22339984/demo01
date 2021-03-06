import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './model/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  serverIp = 'http://127.0.0.1:8000/';
  constructor(
    public http: HttpClient
  ) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.serverIp + 'books');
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.serverIp + 'books/' + id);
  }
}
