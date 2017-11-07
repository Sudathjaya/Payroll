/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewEmpDeductionService } from './view-emp-deduction.service';

describe('ViewEmpDeductionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewEmpDeductionService]
    });
  });

  it('should ...', inject([ViewEmpDeductionService], (service: ViewEmpDeductionService) => {
    expect(service).toBeTruthy();
  }));
});
