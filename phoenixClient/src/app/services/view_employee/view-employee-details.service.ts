import { Injectable } from '@angular/core';

import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ViewEmployeeDetailsService {

  constructor(private http:Http) {


   }
//get info to employee info

  getemp(){
    return this.http.get('http://localhost:3000/empl')
      .map(res => res.json());
  }
//get data to empdeduct
 getemp1(){
    return this.http.get('http://localhost:3000/empdeduct')
      .map(res => res.json());
  }
//get data to empalow
  getemp2(){
    return this.http.get('http://localhost:3000/empallow1')
      .map(res => res.json());
  }
  //get data from emp and deduction
  getemp3(){
    return this.http.get('http://localhost:3000/empl3')
      .map(res => res.json());
  }
  //get data from emp and allowance
  getemp4(){
    return this.http.get('http://localhost:3000/empl4')
      .map(res => res.json());
  }

  geteattendac(){
    return this.http.get('http://localhost:3000/attendance')
      .map(res => res.json());
  }

  geteattendac2(){
    return this.http.get('http://localhost:3000/attendac2')
      .map(res => res.json());
  }
 getot_scale(){
    return this.http.get('http://localhost:3000/attendac3')
      .map(res => res.json());
  }

 getleave(){
    return this.http.get('http://localhost:3000/getleave')
      .map(res => res.json());
  }

   getMonths(){
    return this.http.get('http://localhost:3000/getMonth')
      .map(res => res.json());
  }
    getranges(){
    return this.http.get('http://localhost:3000/getranges')
      .map(res => res.json());
  }

  getcorectdateofpayment(){
    return this.http.get('http://localhost:3000/getcorectdateofpayment')
      .map(res => res.json());
  }
senddata(obj){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/insertmordetails',JSON.stringify(obj),{headers:headers})
  .map(res => res.json());
}
 

 senddata2(obj1){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/insertmordetails2',JSON.stringify(obj1),{headers:headers})
  .map(res => res.json());
}
 



}
