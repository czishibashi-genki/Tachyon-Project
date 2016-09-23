import { Component, OnInit, Input } from '@angular/core';
// import { JSkONP_PROVIDERS } from '@angular/http';
import { GoogleApiService } from '../../modules/google-api.service'
import { BookService } from '../../services/book.service'
import { Book } from '../../domains/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    BookService
    // JSONP_PROVIDERS
  ]
})
export class HomeComponent {
  googleLoginButtonId = "google-login-button";
  books: Book[];

  constructor(private bookService: BookService, private googleClient: GoogleApiService) { }

  ngAfterViewInit() {
    this.googleClient.renderLoginButton(
      this.googleLoginButtonId,
      (loggedInUser) => {
        this.bookService.findAll().subscribe( res => {
            this.books = res.json().values.map( row => {
              return new Book(row[0]);
            });
          }
        );
      }
    )
  }
}
