import { Injectable } from '@angular/core';
import { Borrowing } from '../domains/borrowing';
import { SpreadsheetClient } from '../modules/spreadsheet-client.service'

@Injectable()
export class BorrowingService {
  sheetName = 'borrowing_history';
  constructor(private sheetClient: SpreadsheetClient) { }

  borrowing(bookId: number, email: string) {
    console.log(`borrowing bookId: ${bookId}, userId: ${email}`);
    let borrowing = new Borrowing(bookId, email, new Date());
    console.log(borrowing.toFormat());
    return this.sheetClient.post(this.sheetName, borrowing.toFormat());
  }

  findAll() {
    return this.sheetClient.get(this.sheetName, 'A1:1000');
  }

  // index行の返却日付を更新
  return(index: number, borrowingInfo: Borrowing, returnedDate: Date) {
    console.log(index + returnedDate.toString());
    borrowingInfo.returnedDate = returnedDate;
    return this.sheetClient.put(this.sheetName, borrowingInfo.toFormat(), `A${index + 1}`);
  }
}
