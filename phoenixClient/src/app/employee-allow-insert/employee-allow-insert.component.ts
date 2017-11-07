import { Component, OnInit } from '@angular/core';
import{ViewEmployeeDetailsService} from '../services/view_employee/view-employee-details.service';
import { AllowanceService } from '../services/allowance/allowance.service';
import{ Allowance } from  '../allowances/allowance';
import { Employee } from '../employee/employee';
import { AllowanceInsertingServiceService } from '../services/emp_allowa/allowance-inserting-service.service';
@Component({
  selector: 'app-employee-allow-insert',
  templateUrl: './employee-allow-insert.component.html',
  styleUrls: ['./employee-allow-insert.component.css'],
    providers: [ViewEmployeeDetailsService],
        
})
export class EmployeeAllowInsertComponent implements OnInit {
eid:number;
emp_name;
designation_id: number;
dor_no;
steet;
zipe_code;
email;
date_joined;
dept_id:number;
bank_code;
employee;
allowance;
aid:number;
atype;
a_amount:number;
name;
emp_allowance_id;
allowance_id;
  
  constructor( private allowance_details:AllowanceService,private view_employee_details:ViewEmployeeDetailsService) {

     this.view_employee_details.getemp2().subscribe(emp => {
        this.employee=emp;

        console.log(emp);
        console.log(this.employee);


      });


 this.allowance_details.getallow1().subscribe(allowan => {
        this.allowance=allowan;
        console.log(allowan);
        console.log(this.allowance);

      });

   }

  ngOnInit() {
  } 
getname(id){
 console.log(id);
this.name=this.employee.find((emp:any)=>emp.emp_id==id).emp_name;

}

gettype(id){
  console.log(id);
  this.aid=this.allowance.find((allowa:any)=>allowa.atype==id).aid;
  console.log(this.aid);
  

}
adddata1(){
  var newitem={
    eid:this.eid,
    aid:this.aid,
    a_amount:this.a_amount
  }
  console.log(newitem);
    this.allowance_details.senddata1(newitem).subscribe(data =>{
  
        console.log("OK");
  
     
     
     });
}



}
