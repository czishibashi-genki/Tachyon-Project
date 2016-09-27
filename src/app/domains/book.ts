export class Book {
  id: number;
  name: string;
  isbn: string;
  arrivalDate: Date;
  constructor(id: number, name: string, isbn: string, arrivalDate: Date){
    this.id = id;
    this.name = name;
    this.isbn = isbn;
    this.arrivalDate = arrivalDate;
  }
}
