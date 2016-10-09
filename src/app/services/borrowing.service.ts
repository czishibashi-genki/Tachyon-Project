import { Injectable } from '@angular/core';
import { Borrowing } from '../domains/borrowing';
import { SpreadsheetClient } from '../modules/spreadsheet-client.service'

@Injectable()
export class BorrowingService {
  sheetName = 'borrowing_history';
  constructor(private sheetClient: SpreadsheetClient) { }

  borrowing(bookId: number, email: string) {
    console.log(`borrowing bookId: ${bookId}, userId: ${email}`);
    let borrowing = new Borrowing(bookId, email);
    console.log(borrowing.toFormat());
    return this.sheetClient.post(this.sheetName, borrowing.toFormat());
  }

  findAll() {
    return this.sheetClient.get('borrowing_history', 'A1:1000');
  }
}
