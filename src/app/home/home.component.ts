import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BookService]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
