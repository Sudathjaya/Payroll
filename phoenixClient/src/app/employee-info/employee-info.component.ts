import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import{ViewEmployeeDetailsService} from '../services/view_employee/view-employee-details.service';
import{ Types } from'./e_info';


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
   

  types1;
  types2;
  date;

noPay=0;
leave_start;
leave_end;
leaveDeduction=0;
  eid:number;
  month_id0;
  employee;
  name;
  designation;
  department;
  basic;
  dtype;
  d_amount:number;
  atype;
  a_amount:number;
  deductions;
  allowance;
  attend;
  attend2:number;
  arrival_time;
  departure_time;
  workhours;
  hours;
  index:number;
    index5:number;
  index2:number=0;
  count:number;
  worktime:number;
  overtime:number;
  getot;
ot_per_hour:number;
ot:number;
etf:number;
leave:number;
month;
leaveName;
leaveObj;
leave_days;
correctmonth:number;
results3;
resultsfinals;
  constructor(private router:Router,private route:ActivatedRoute,private view_emp:ViewEmployeeDetailsService) 
  {
   view_emp.getMonths().subscribe(mon=>{
      this.month=mon;
      console.log(this.month_id0);
    });


  
  view_emp.getcorectdateofpayment().subscribe(mon2=>{
      this.correctmonth=mon2;
      //console.log("kkk"+this.eid);
      console.log(mon2); 
 
        var filterdata3 = mon2.filter(emp => emp.emp_id === this.eid) ;
 console.log("kk"+this.eid);
 console.log("kyyk"+this.month_id0);
      
      // console.log(filterdata3);
       var filterdata4 = filterdata3.filter(emp => emp.date_of_payment === this.month_id0) ;  
         //console.log(filterdata4);
         this.resultsfinals=filterdata4[0];
         console.log( this.resultsfinals);
    });


 


  } 
 ngOnInit() {
    var eid=this.route.snapshot.params['id'];
    this.eid=parseInt(eid);
     var month_id0=this.route.snapshot.params['id1'];
    this.month_id0=parseInt(month_id0);
  console.log("id"+eid);
      console.log("id1"+month_id0);
  }      

  
 


}
