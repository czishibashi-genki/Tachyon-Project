export class Borrowing {
  bookId: number;
  userId: string;
  borrowingDate: Date;
  returnedDate: Date;
  constructor(bookId: number, userId: string, borrowingDate: Date, returnedDate: Date = null) {
    this.bookId = bookId;
    this.userId = userId;
    this.borrowingDate = borrowingDate;
    this.returnedDate = returnedDate;
  }

  toFormat(): string {
    let dataArray = [this.bookId, this.userId, this.borrowingDate, this.returnedDate];
    let object = { 'values': [dataArray]};
    return JSON.stringify(object);
  }
}
