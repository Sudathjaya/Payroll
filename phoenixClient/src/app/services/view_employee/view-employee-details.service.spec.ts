/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewEmployeeDetailsService } from './view-employee-details.service';

describe('ViewEmployeeDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewEmployeeDetailsService]
    });
  });

  it('should ...', inject([ViewEmployeeDetailsService], (service: ViewEmployeeDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
