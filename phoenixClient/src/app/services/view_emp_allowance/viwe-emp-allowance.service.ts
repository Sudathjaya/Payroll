import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ViweEmpAllowanceService {

  constructor(private http:Http) { }
    //get info to employee info

  getempallowancebyname(){
    return this.http.get('http://localhost:3000/getempallowancebyname')
      .map(res => res.json());
  }
updatallowemp(obj){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/updatallowemp',JSON.stringify(obj),{headers:headers})
  .map(res => res.json());
}

deleterowempallow(obj4){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/deleterowempallow',JSON.stringify(obj4),{headers:headers})
  .map(res => res.json());
}

}
