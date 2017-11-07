import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class PaymentsService {




  constructor(private http:Http) {
    console.log('payment service  start.....');
   }

//get purchace order items
  getpayments(){
    return this.http.get('http://localhost:3000/getpayments')
      .map(res => res.json());
  }
    getdataofpastpayments(){
    return this.http.get('http://localhost:3000/getdataofpastpayments')
      .map(res => res.json());
  }
   getdataofpastmonth(){
    return this.http.get('http://localhost:3000/getpastpaymentsmonth')
      .map(res => res.json());
  }
 getemployee(){
    return this.http.get('http://localhost:3000/empl')
      .map(res => res.json());
  }

  geteattendac(){
    return this.http.get('http://localhost:3000/attendance')
      .map(res => res.json());
  }

 getot_scale(){
    return this.http.get('http://localhost:3000/attendac3')
      .map(res => res.json());
  }
geteattendac2(){
    return this.http.get('http://localhost:3000/attendac2')
      .map(res => res.json());
  }
 //get data from emp and allowance
  getemp4(){
    return this.http.get('http://localhost:3000/empl45')
      .map(res => res.json());
  }
   getemp5(){
    return this.http.get('http://localhost:3000/empl456')
      .map(res => res.json());
  }

 senddata2(obj1){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/insertmordetails2',JSON.stringify(obj1),{headers:headers})
  .map(res => res.json());
}
senddata(obj){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/insertmordetails',JSON.stringify(obj),{headers:headers})
  .map(res => res.json());
}
  


/*
updatep_btype(obj2){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/updatep_btype',JSON.stringify(obj2),{headers:headers})
  .map(res => res.json());
}*/

}
  /*
//get all items
  getItems(){
    return this.http.get('http://localhost:3000/item')
      .map(res => res.json());purchesing_order
  }

  addPoItems(newItem){
    console.log(newItem);
   var headers =new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000', JSON.stringify(newItem), {headers: headers})
      .map(res => res.json());
  
  }

*/



