import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../services/purchase-order/purchase-order.service';
import { POItem } from '../index/poItems';


@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],

})
export class PurchaseOrderComponent{
  //purchace order array
  poItems:POItem[]; 


  

  constructor(private poservice:PurchaseOrderService) { 
    this.poservice.getPoItems()
      .subscribe(items => {
          console.log(items);
          this.poItems=items;
          console.log(this.poItems);
      });

  }


}


