/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BorrowingService } from './borrowing.service';

describe('Service: Borrowing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BorrowingService]
    });
  });

  it('should ...', inject([BorrowingService], (service: BorrowingService) => {
    expect(service).toBeTruthy();
  }));
});
