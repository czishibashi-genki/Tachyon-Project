import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleApiService } from '../../modules/google-api.service'
import { BookService } from '../../services/book.service'
import { AppService } from '../../app.service'
import { BorrowingService } from '../../services/borrowing.service'
import { Book } from '../../domains/book';
import { Borrowing } from '../../domains/borrowing';
import { UserInfo } from '../../domains/user-info';

enum BookState {Free, OnLoan, Own}
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
  borrowingInfos: Borrowing[];

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
    this.borrowingService.findAll().subscribe(borrowingRes => {
      this.borrowingInfos = borrowingRes.json().values.map( row => {
        return new Borrowing(row[0], row[1]);
      });
      console.log(this.borrowingInfos);
      this.bookService.findAll().subscribe( bookRes => {
        this.books = bookRes.json().values.map( row => {
          return new Book(row[0], row[1], row[2], row[7]);
        });
        this.filteredBooks = this.books;
      });
    });
  }

  borrow(bookId: number) {
    this.borrowingService.borrowing(bookId, this.appService.loggedInUser.email).subscribe( res => {
      console.log(res);
    });
  }

  checkBookState(bookId: number, loggedInUserId: string = this.appService.loggedInUser.email) {
    // まだ返却してない貸出リスト

    // 本のIDが一致するものを取り出す
    let loanedInfo: Borrowing = this.borrowingInfos.filter(b => b.bookId === bookId).shift();

    // 一致するものがなければ借りる
    if (loanedInfo == null) {return '借りる'; };

    // userIdが等しければ返却
    if (loanedInfo.userId === loggedInUserId) {
      return '返却';
    }else {
      return '貸出中';
    }
  }

  search(keyword: string) {
    this.filteredBooks = this.books.filter(book =>
      book.name.toLowerCase().indexOf(keyword) >= 0
    );
  }
}
