/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpreadsheetClientService } from './spreadsheet-client.service';

describe('Service: SpreadsheetClient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpreadsheetClientService]
    });
  });

  it('should ...', inject([SpreadsheetClientService], (service: SpreadsheetClientService) => {
    expect(service).toBeTruthy();
  }));
});
