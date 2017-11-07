import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PurchaseOrderService {

  constructor(private http:Http) {
    console.log('purchase order service start.....');
   }

//get purchace order items
  getPoItems(){
    return this.http.get('http://localhost:3000/PoItems')
      .map(res => res.json());
  }
//get all items
  getItems(){
    return this.http.get('http://localhost:3000/item')
      .map(res => res.json());
  }

  addPoItems(newItem){
    console.log(newItem);
   var headers =new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000', JSON.stringify(newItem), {headers: headers})
      .map(res => res.json());
  
  }

}
