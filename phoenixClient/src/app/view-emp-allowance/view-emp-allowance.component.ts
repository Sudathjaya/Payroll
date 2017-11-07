import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import{ViweEmpAllowanceService} from '../services/view_emp_allowance/viwe-emp-allowance.service';
@Component({
  selector: 'app-view-emp-allowance',
  templateUrl: './view-emp-allowance.component.html',
  styleUrls: ['./view-emp-allowance.component.css'],
  providers: [ViweEmpAllowanceService]
})
export class ViewEmpAllowanceComponent implements OnInit {
atype;
employee_allowance;
emp_id:number;
emp_name;
a_amount:number;
allowance;
empid:number;
empname;
amount:number;
button="Save";
editeObject1={
  emp_id:this.emp_id,
  emp_name:this.emp_name,
  a_amount:this.a_amount


};

  constructor(private router:Router,private route:ActivatedRoute,private view_emp_allowance:ViweEmpAllowanceService) 
  {


 view_emp_allowance.getempallowancebyname()
    .subscribe(item3=>{
this.employee_allowance=item3;


var filterdata = item3.filter(dedu => dedu.atype=== this.atype);
this.employee_allowance=filterdata;
console.log(this.employee_allowance);
   
          });





   }







ngOnInit() {
    var atype=this.route.snapshot.params['name1'];
    this.atype=atype;
    console.log("aaa")
    console.log(atype);
     console.log("aaa")
  }
  addOredit(event){

  var emptyObj = {
    emp_id:null,
    emp_name:'',
    a_amount:null
  }

  

     this.view_emp_allowance.updatallowemp(this.editeObject1).subscribe(data => {
            // console.log(data);
          if(data=="ok"){
               this.button="Save"
                this.editeObject1=emptyObj;
           console.log(data);
          }

       });


  }
  editRow1(employee_allowance){ 

this.editeObject1=employee_allowance;
this.button="Update";
}
  deleterow1(employee_allowance){
    var id=employee_allowance.emp_id;
         // console.log(id);
    
      var allowance=this.employee_allowance;
       this.view_emp_allowance.deleterowempallow(employee_allowance).subscribe(data => {
            // console.log("aaaaaa")
          //  console.log(data);
           // console.log("aaaaaa")
          if(data=="ok"){
                  for(var i=0;i<allowance.length;i++){
                         if(allowance[i].emp_id==id){
                         this.employee_allowance.splice(i,1);
                         }
                   }
             
          }

       });
        }





}
