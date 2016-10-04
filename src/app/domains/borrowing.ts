export class Borrowing {
  bookId: number;
  userId: string;
  constructor(bookId: number, userId: string) {
    this.bookId = bookId;
    this.userId = userId;
  }

  toFormat(): string {
    let dataArray = [this.bookId, this.userId];
    let object = { 'values': [dataArray]};
    return JSON.stringify(object);
  }
}
