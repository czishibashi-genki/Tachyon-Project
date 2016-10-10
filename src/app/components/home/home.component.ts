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
  bookState = BookState;

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
        return new Borrowing(row[0], row[1], row[2]);
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
    let userId = this.appService.loggedInUser.email;
    this.borrowingService.borrowing(bookId, userId).subscribe( res => {
      console.log(res);
      this.borrowingInfos.push(new Borrowing(bookId, userId, new Date()));
    });
  }

  return(bookId: number) {
    let userId = this.appService.loggedInUser.email;
    let myBorrowing = this.borrowingInfos.filter(b => b.bookId === bookId && b.userId === userId && b.returnedDate === null)[0];
    // console.log(myBorrowing);
    let index = this.borrowingInfos.lastIndexOf(myBorrowing);
    this.borrowingService.return(index, myBorrowing, new Date()).subscribe( res => {
      console.log(res);
    });
    console.log(bookId + index);
  }

  checkBookState(bookId: number, loggedInUserId: string = this.appService.loggedInUser.email) {
    // まだ返却してない貸出リスト
    let borrowingInfoList = this.borrowingInfos.filter(b => b.returnedDate === null);

    // 本のIDが一致する最初ものを取り出す
    let loanedInfo: Borrowing = borrowingInfoList.filter(b => b.bookId === bookId).shift();

    // 一致するものがなければ借りる
    if (loanedInfo == null) {return BookState.Free; };

    // userIdが等しければ返却
    if (loanedInfo.userId === loggedInUserId) {
      return BookState.Own;
    }else {
      return BookState.OnLoan;
    }
  }

  search(keyword: string) {
    this.filteredBooks = this.books.filter(book =>
      book.name.toLowerCase().indexOf(keyword) >= 0
    );
  }
}
