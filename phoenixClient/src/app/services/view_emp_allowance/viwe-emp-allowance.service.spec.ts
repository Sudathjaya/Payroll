/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViweEmpAllowanceService } from './viwe-emp-allowance.service';

describe('ViweEmpAllowanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViweEmpAllowanceService]
    });
  });

  it('should ...', inject([ViweEmpAllowanceService], (service: ViweEmpAllowanceService) => {
    expect(service).toBeTruthy();
  }));
});
