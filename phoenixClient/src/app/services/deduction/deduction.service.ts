import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DeductionService {








  constructor(private http:Http) {
    console.log('payment service  start.....');
   }

//get all deductions
  getDeduction(){
    return this.http.get('http://localhost:3000/Deduction')
      .map(res => res.json());
  }

addOredit(newdeduction){
  console.log(newdeduction);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/addOredit',JSON.stringify(newdeduction),{headers:headers})
  .map(res => res.json());
}


deleteRow(obj){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/deleteRow',JSON.stringify(obj),{headers:headers})
  .map(res => res.json());
}

updatdedu(obj2){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/updatdedu',JSON.stringify(obj2),{headers:headers})
  .map(res => res.json());
}
 getdeduct1(){
    return this.http.get('http://localhost:3000/empdeduct1')
      .map(res => res.json());
  }



senddata(newd){
  console.log(newd);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/senddata',JSON.stringify(newd),{headers:headers})
  .map(res => res.json());
}







}