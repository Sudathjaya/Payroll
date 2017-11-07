import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import{ViewEmpDeductionService} from '../services/view_emp_deduction/view-emp-deduction.service';
@Component({
  selector: 'app-view-emp-deduction',
  templateUrl: './view-emp-deduction.component.html',
  styleUrls: ['./view-emp-deduction.component.css'],
      providers: [ViewEmpDeductionService]
})
export class ViewEmpDeductionComponent implements OnInit {
dtype;
employee_deduction;
empid;
empname;
amount;
emp_id:number;
emp_name;
d_amount:number;
button="Save";
deduction;
editeObject={
  emp_id:this.emp_id,
  emp_name:this.emp_name,
  d_amount:this.d_amount


};
  constructor(private router:Router,private route:ActivatedRoute,private view_emp_deduction:ViewEmpDeductionService) {
 /* view_emp_deduction.getempdeducttionbyname()
  .subscribe(item1=>{
  //console.log(item);
  this.employee=item1;

      this.empid=this.employee.find((emp:any)=>emp.dtype===this.dtype).emp_id;
      this.empname=this.employee.find((emp:any)=>emp.dtype===this.dtype).emp_name;
      this.amount=this.employee.find((emp:any)=>emp.dtype===this.dtype).d_amount;
      
        
     // console.log(this.eid);
       //console.log(this.atype);
        //console.log(this.a_amount);
         //console.log(this.d_amount);
    });*/

 view_emp_deduction.getempdeducttionbyname()
    .subscribe(item3=>{
this.employee_deduction=item3;
var filterdata = item3.filter(dedu => dedu.dtype === this.dtype);
this.employee_deduction=filterdata;
console.log(this.employee_deduction);
   
          });




   }







ngOnInit() {
    var dtype=this.route.snapshot.params['name'];
    this.dtype=dtype;
    console.log(this.dtype);
  }

editRow(employee_deduction){ 

this.editeObject=employee_deduction;
this.button="Update";
}
  addOredit(event){

  var emptyObj = {
    emp_id:null,
    emp_name:'',
    d_amount:null
  }

  

     this.view_emp_deduction.updatdeduemp(this.editeObject).subscribe(data => {
            // console.log(data);
          if(data=="ok"){
               this.button="Save"
                this.editeObject=emptyObj;
           console.log(data);
          }

       });


  }


  deleteRow(employee_deduction){
    var id=employee_deduction.emp_id;
      var deduction=this.employee_deduction;
       this.view_emp_deduction.deleteRowemp(employee_deduction).subscribe(data => {
            // console.log("aaaaaa")
          //  console.log(data);
           // console.log("aaaaaa")
          if(data=="ok"){
                  for(var i=0;i<deduction.length;i++){
                         if(deduction[i].emp_id==id){
                         this.employee_deduction.splice(i,1);
                         }
                   }
             
          }

       });
        }
    
  }


