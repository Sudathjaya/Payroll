/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeductionService } from './deduction.service';

describe('DeductionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeductionService]
    });
  });

  it('should ...', inject([DeductionService], (service: DeductionService) => {
    expect(service).toBeTruthy();
  }));
});
