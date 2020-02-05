import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { BookService } from '../book.service';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-lesson8',
  templateUrl: './lesson8.component.html',
  styleUrls: ['./lesson8.component.scss']
})
export class Lesson8Component implements OnInit {
  books: Book[];

  constructor(
    public httpService: HttpService,
    public bookService: BookService,
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      data => {
        console.log(data);
        this.books = data;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('finish');
      }
    );
  }

}
