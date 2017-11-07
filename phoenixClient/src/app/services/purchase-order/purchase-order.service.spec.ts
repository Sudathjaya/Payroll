/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PurchaseOrderService } from './purchase-order.service';

describe('PurchaseOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchaseOrderService]
    });
  });

  it('should ...', inject([PurchaseOrderService], (service: PurchaseOrderService) => {
    expect(service).toBeTruthy();
  }));
});
