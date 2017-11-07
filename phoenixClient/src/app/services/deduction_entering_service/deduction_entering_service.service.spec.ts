/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeductionEnteringServiceService } from './deduction-entering-service.service';

describe('DeductionEnteringServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeductionEnteringServiceService]
    });
  });

  it('should ...', inject([DeductionEnteringServiceService], (service: DeductionEnteringServiceService) => {
    expect(service).toBeTruthy();
  }));
});
