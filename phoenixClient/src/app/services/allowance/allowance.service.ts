import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AllowanceService {









  constructor(private http:Http) {
    console.log('Allowances service  start.....');
   }

//get all deductions
  getAllowance(){
    return this.http.get('http://localhost:3000/Allowance')
      .map(res => res.json());
  }
addallowance(newallowance){
  console.log(newallowance);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/addallowance',JSON.stringify(newallowance),{headers:headers})
  .map(res => res.json());
}

deleteRow(obj){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/a_deleteRow',JSON.stringify(obj),{headers:headers})
  .map(res => res.json());
}

updateallowa(obj2){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/updateallowa',JSON.stringify(obj2),{headers:headers})
  .map(res => res.json());
}

 getallow1(){
    return this.http.get('http://localhost:3000/getallow1')
      .map(res => res.json());
  }

  senddata1(newd){
  console.log(newd);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/senddata1',JSON.stringify(newd),{headers:headers})
  .map(res => res.json());
}


}