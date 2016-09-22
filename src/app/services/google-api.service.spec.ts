/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleApiServiceService } from './google-api.service';

describe('Service: GoogleApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleApiServiceService]
    });
  });

  it('should ...', inject([GoogleApiServiceService], (service: GoogleApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
