import { Injectable } from '@angular/core';
import { GoogleApiService } from './google-api.service';
import { AppSettings } from '../AppSettings';

@Injectable()
export class SpreadsheetClient {
  private sheetId: string;
  constructor(private googleClient: GoogleApiService) {}

  get(sheetName: string, range: string) {
    let url = `${AppSettings.SHEET_ENDPOINT}${AppSettings.SHEET_ID}/values/${sheetName}!${range}`;
    return this.googleClient.get(url);
  }
}
