import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleApiService } from '../../modules/google-api.service'
import { BookService } from '../../services/book.service'
import { AppService } from '../../app.service'
import { BorrowingService } from '../../services/borrowing.service'
import { Book } from '../../domains/book';
import { UserInfo } from '../../domains/user-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    BookService,
    BorrowingService
  ]
})
export class HomeComponent implements OnInit{
  // user: UserInfo;
  googleLoginButtonId = "google-login-button";
  books: Book[];
  filteredBooks: Book[];

  constructor(
    private appService: AppService,
    private bookService: BookService,
    private borrowingService: BorrowingService,
    private googleClient: GoogleApiService,
    private router: Router
  ) {

  }

  ngOnInit() {
    if(this.googleClient.isAuthenticated()) {
      console.log('not logginnnnnnnnnn!');
      let link = ['/login'];
      this.router.navigate(link);
      return;
    }
    console.log('logginnnnnnnnnn!');
    this.bookService.findAll().subscribe( res => {
      this.books = res.json().values.map( row => {
        return new Book(row[0], row[1], row[2], row[7]);
      });
      this.filteredBooks = this.books;
    });
  }

  borrow(bookId: number) {
    this.borrowingService.borrowing(bookId, this.appService.loggedInUser.email).subscribe( res => {
      console.log(res);
    });

  }

  search(keyword: string) {
    this.filteredBooks = this.books.filter(book =>
      book.name.toLowerCase().indexOf(keyword) >= 0
    );
  }
}
