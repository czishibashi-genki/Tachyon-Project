import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleApiService } from '../../modules/google-api.service'
import { BookService } from '../../services/book.service'
import { Book } from '../../domains/book';
import { UserInfo } from '../../domains/user-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    BookService
    // JSONP_PROVIDERS
  ]
})
export class HomeComponent implements OnInit{
  @Input() user: UserInfo;
  googleLoginButtonId = "google-login-button";
  books: Book[];
  filteredBooks: Book[];

  constructor(
    private bookService: BookService,
    private googleClient: GoogleApiService,
    private router: Router
  ) { }

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

  // ngOnChange() {
  //   console.log('onChange');
  // }
  //
  // ngDoCheck() {
  //   console.log('doCheck');
  //   console.log(this.googleClient.loggedInUser);
  //   if (!this.googleClient.loggedInUser) {
  //     console.log('void');
  //     let link = ['/'];
  //     // this.router.navigate(link);
  //     return;
  //   }
  //     console.log('not void');
  //   console.log('not null');
  //   // this.bookService.findAll().subscribe( res => {
  //   //   this.books = res.json().values.map( row => {
  //   //     return new Book(row[0], row[1], row[2], row[7]);
  //   //   });
  //   //   this.filteredBooks = this.books;
  //   // }
  // );
  // }
  //
  // ngAfterViewInit() {
  //   console.log('afterViewInit');
  // }
  //
  // ngOnDestroy() {
  //   console.log('onDestory');
  // }
  //
//   ngOnInit() {
//     if (!this.googleClient.loggedInUser) {
//       console.log('void');
//       let link = ['/'];
//       this.router.navigate(link);
//       return;
//     }
//     console.log('not null');
//     this.bookService.findAll().subscribe( res => {
//       this.books = res.json().values.map( row => {
//         return new Book(row[0], row[1], row[2], row[7]);
//       });
//       this.filteredBooks = this.books;
//     }
//   );
// }

  // ngAfterViewInit() {
  //   this.googleClient.renderLoginButton(
  //     this.googleLoginButtonId,
  //     (loggedInUser) => {
  //       this.bookService.findAll().subscribe( res => {
  //           this.books = res.json().values.map( row => {
  //             return new Book(row[0], row[1], row[2], row[7]);
  //           });
  //           this.filteredBooks = this.books;
  //         }
  //       );
  //     }
  //   )
  // }

  borrow(bookId: number) {
    console.log(bookId);
  }

  search(keyword: string) {
    this.filteredBooks = this.books.filter(book =>
      book.name.toLowerCase().indexOf(keyword) >= 0
    );
  }
}
