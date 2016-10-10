import { Injectable } from '@angular/core';
import { GoogleApiService } from './google-api.service';
import { AppSettings } from '../AppSettings';

@Injectable()
export class SpreadsheetClient {
  private sheetId: string;
  private sheetName: string;
  constructor(
    private googleClient: GoogleApiService
  ) {}

  get(sheetName: string, range: string) {
    let url = `${AppSettings.SHEET_ENDPOINT}${AppSettings.SHEET_ID}/values/${sheetName}!${range}`;
    return this.googleClient.get(url);
  }

  post(sheetName: string, body, range: string = 'A1') {
    let url = `${AppSettings.SHEET_ENDPOINT}${AppSettings.SHEET_ID}/values/${sheetName}!${range}:append?valueInputOption=USER_ENTERED`;
    return this.googleClient.post(url, body);
  }

  put(sheetName: string, body: string, range: string) {
    let url = `${AppSettings.SHEET_ENDPOINT}${AppSettings.SHEET_ID}/values/${sheetName}!${range}?valueInputOption=USER_ENTERED`;
    return this.googleClient.put(url, body);
  }
}
