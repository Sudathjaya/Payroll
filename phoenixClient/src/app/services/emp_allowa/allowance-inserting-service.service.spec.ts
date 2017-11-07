/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllowanceInsertingServiceService } from './allowance-inserting-service.service';

describe('AllowanceInsertingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllowanceInsertingServiceService]
    });
  });

  it('should ...', inject([AllowanceInsertingServiceService], (service: AllowanceInsertingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
