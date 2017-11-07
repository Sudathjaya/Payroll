import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ViewEmpDeductionService {

  constructor(private http:Http) { }
  //get info to employee info

  getempdeducttionbyname(){
    return this.http.get('http://localhost:3000/viewempdeduction')
      .map(res => res.json());
  }

updatdeduemp(obj){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/updatdeduemp',JSON.stringify(obj),{headers:headers})
  .map(res => res.json());
}


deleteRowemp(obj2){
 // console.log(id);
  var headers=new Headers();
  headers.append('Content-Type','application/json');
 return this.http.post('http://localhost:3000/deleteRowemp',JSON.stringify(obj2),{headers:headers})
  .map(res => res.json());
}

}
