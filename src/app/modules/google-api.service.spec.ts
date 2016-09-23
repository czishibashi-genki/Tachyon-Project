/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleApiService } from './google-api.service';

describe('Service: GoogleApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleApiService]
    });
  });

  it('should ...', inject([GoogleApiService], (service: GoogleApiService) => {

    expect(service).toBeTruthy();
  }));
});
