import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
// declare var gapi: any;
// import * as dataDrive from 'data-drive';

@Injectable()
export class BookService {
  config = {
    "clientId": "228296162445-4g222pvlptji16gvnil2uteo9kvnk6f6.apps.googleusercontent.com"
  }
  constructor() {
    // let dd = require('data-drive')
  }

  find() {
    console.log('find');
    // let url = 'https://sheets.googleapis.com/v4/spreadsheets/1mUSW4E9sG3PWtOPSKnMIs42XquUusMSJU7MBLKdD78g/values/A1\?Authorization\=' + this.userAuthToken;
    // this.http.get(url)
    // .map(console.log(this.extractData);
    // console.log('search');
  }
}
