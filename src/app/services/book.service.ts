import { Injectable } from '@angular/core';
import { Book } from '../domains/book';
import { SpreadsheetClient } from '../modules/spreadsheet-client.service'
// declare var gapi: any;
// import * as dataDrive from 'data-drive';

@Injectable()
export class BookService {
  sheetName = 'book';
  constructor(private sheetClient: SpreadsheetClient) {
    // let dd = require('data-drive')
  }

  findAll() {
    console.log('findAll');
    return this.sheetClient.get('book', 'A1:10');
  }
}
