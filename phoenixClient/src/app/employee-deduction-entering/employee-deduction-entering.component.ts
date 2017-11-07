import { Component, OnInit } from '@angular/core';
import { DeductionEnteringServiceService } from '../services/deduction_entering_service/deduction_entering_service.service';
import{ViewEmployeeDetailsService} from '../services/view_employee/view-employee-details.service';
import { DeductionService } from '../services/deduction/deduction.service';
import{ Deductions } from  '../deduction/deduction';
import { Employee } from '../employee/employee';
@Component({
  selector: 'app-employee-deduction-entering',
  templateUrl: './employee-deduction-entering.component.html',
  styleUrls: ['./employee-deduction-entering.component.css'],
   providers: [ViewEmployeeDetailsService]
})
export class EmployeeDeductionEnteringComponent implements OnInit {
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
deduction;
did:number;
dtype;
d_amount:number;
name;
emp_deduct_id;
deduct_id;

  constructor( private deduct_details:DeductionService,private view_employee_details:ViewEmployeeDetailsService) { 



 this.view_employee_details.getemp1().subscribe(emp => {
        this.employee=emp;

        console.log(emp);
        console.log(this.employee);


      });


 this.deduct_details.getdeduct1().subscribe(deduct => {
        this.deduction=deduct;
        console.log(deduct);
        console.log(this.deduction);

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
  this.did=this.deduction.find((deduct:any)=>deduct.dtype==id).did;
  console.log(this.did);
  

}
adddata(){
  var newitem={
    eid:this.eid,
    did:this.did,
    d_amount:this.d_amount
  }
  console.log(newitem);
    this.deduct_details.senddata(newitem).subscribe(data =>{
  
        console.log("OK");
  
     
     
     });
}


}

