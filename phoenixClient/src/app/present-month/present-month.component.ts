import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import{ViewEmployeeDetailsService} from '../services/view_employee/view-employee-details.service';
@Component({
  selector: 'app-present-month',
  templateUrl: './present-month.component.html',
  styleUrls: ['./present-month.component.css']
})
export class PresentMonthComponent implements OnInit {
  types1;
  types2;
  date;
monthcurrent;
noPay=0;
leave_start;
leave_end;
leaveDeduction=0;
  eid:number;
  month_id0:number;
  employee;
  name;
  designation;
  department;
  basic=0;
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
leave:number=0;
month;
leaveName;
leaveObj;
leave_days;
correctmonth:number;
sum:number=0;
sum2:number=0;
total_salary:number=0;
gross_salary:number=0;
total_deduction:number=0;
attend_days=0;
bonus=0;
traveling=0;
medical=0;
house_rent=0;
entertainment=0;
union_charges=0;
loan_installment=0;
date_of_payment=0;
total_amount=0;
salary_id=0;
current_attend_days;
current;
date1;
ranges;
designation_id:number;
dept_id:number;
bank_code:number;
paid='paid';
  constructor(private router:Router,private route:ActivatedRoute,private view_emp:ViewEmployeeDetailsService) 
  {
    view_emp.getemp()
    .subscribe(item=>{
      //console.log(item);
    this.employee=item;

    var dates=item.filter((emp:any)=>emp.emp_id===this.eid);
      console.log("hjj")
    console.log(item)
        this.dept_id=this.employee.find((emp:any)=>emp.emp_id===this.eid).dept_id;
      this.designation_id=this.employee.find((emp:any)=>emp.emp_id===this.eid).designation_id;
      this.name=this.employee.find((emp:any)=>emp.emp_id===this.eid).emp_name;
      this.designation=this.employee.find((emp:any)=>emp.emp_id===this.eid).designation;
      this.department=this.employee.find((emp:any)=>emp.emp_id===this.eid).dept_name;
      this.basic=this.employee.find((emp:any)=>emp.emp_id===this.eid).basic_salary;
      this.bank_code=this.employee.find((emp:any)=>emp.emp_id===this.eid).bank_code;
         // this.attend_days=this.employee.find((emp:any)=>emp.emp_id==this.eid).attend_days;
      this.etf=Math.round((this.basic * 0.08)/6);
        
    

     // console.log(this.eid);
       //console.log(this.atype);
        //console.log(this.a_amount);
         //console.log(this.d_amount);
    });
 







//get OT scales per hour
   view_emp.getot_scale()
    .subscribe(item7=>{
      //this.worktime=item6;;
    this.getot=item7;

       this.ot_per_hour=this.getot.find((emp:any)=>emp.emp_id===this.eid).ot_per_hour;
      console.log(this.ot_per_hour);
  });






    //get data from attendence table dates
    
     view_emp.geteattendac2()
    .subscribe(item6=>{
      //this.worktime=item6;;
    this.index5= item6;

      this.count=(this.index5[0].count*9);
      
      console.log("value is"+this.count);
    
  });

//get data from attendance table
  view_emp.geteattendac()
  .subscribe(item5=>{
  
      this.attend=item5;
     //   console.log(this.attend);


     var filterdata = item5.filter(dedu => dedu.emp_id === this.eid);
      this.workhours=filterdata;
//console.log(this.workhours);
      for(var a=0;a<this.workhours.length;a++){
      this.index= (parseFloat(this.workhours[a].attend_out)-parseFloat(this.workhours[a].attend_in))
           // console.log(this.index)
            this.index2=this.index2+this.index;
           // console.log(this.index2);
          // console.log("okkkk"+this.count);
           if(this.index2==this.count){
             this.ot=0;
           }
           else if(this.index2!=this.count){
                  if(this.index2>this.count){
                       this.overtime=this.index2 - this.count;
                      this. ot=this.ot_per_hour * this.overtime;
                  }
                  else{
                       this.ot=0;
                  }
           }
      }
   // console.log(this.index2);
  
    //  console.log(this.deductions);

          });




   
   // console.log(this.eid);
    view_emp.getemp3()
    .subscribe(item3=>{
    // console.log(item3);
      //this.types1=item3;
     // for(var a=0;a<item3.length;a++){
      var filterdata = item3.filter(dedu => dedu.emp_id === this.eid);
            this.deductions=filterdata;
             this.house_rent=item3.find(it=>it.did==1).d_amount;
 console.log(this.house_rent);
    for(var a=0;a<this.deductions.length;a++){
             this.sum2+=parseInt(this.deductions[a].d_amount);
      }
      console.log(this.sum2);
      //console.log(this.deductions);
   // }
          });

             // console.log(this.eid);
    view_emp.getemp4()
    .subscribe(item4=>{
      //console.log(item4);
      var filterdata2 = item4.filter(allow => allow.emp_id === this.eid);
      this.allowance=filterdata2;
 console.log(this.allowance);
 this.bonus=item4.find(it=>it.aid==1).a_amount;

      for(var a=0;a<this.allowance.length;a++){
             this.sum+=parseInt(this.allowance[a].a_amount);
      }
      console.log(this.sum);

          });

    view_emp.getMonths().subscribe(mon=>{
      this.month=mon;
    })
    //get current month
 view_emp.getranges().subscribe(mon=>{
      var date=mon[0].attend_date;
      var month=new Date(date).getMonth()+1;
      var year=new Date(date).getFullYear();
      this.date1= year +' / '+month;
      this.monthcurrent=month;
//this.ranges=this.ranges.find((emp:any)=>emp.emp_id===this.eid).attend_date;
    })

    

                     // leave
    view_emp.getleave()
    .subscribe(item4=>{
      //console.log(item4);
      var filterdata2 = item4.filter(allow => allow.emp_id === this.eid);
      this.leaveObj=filterdata2;
      var filterdata2 = item4.filter(allow => allow.emp_id === this.eid);
      this.leave=filterdata2;

      if(filterdata2[0]==null){
        
      }else{
        this.leave_start=filterdata2[0].start_date;
        this.leave_end=filterdata2[0].end_date;
        var time=Math.abs(new Date(filterdata2[0].end_date).getTime()-new Date(filterdata2[0].start_date).getTime());
        var diffDays = Math.ceil(time / (1000 * 3600 * 24)); 
       // console.log(diffDays);
       // console.log();
    }});
       
           
   }

  ngOnInit() {
    var eid=this.route.snapshot.params['id'];
    this.eid=parseInt(eid);
    
   console.log("id"+eid);
 
 
        this.gross_salary=this.basic+this.ot+this.sum;
        this.total_deduction= this.etf+this.sum2;
        this.total_salary=this.gross_salary-this.total_deduction;

       console.log(this.total_salary);
      
  }      

  /*getMonth(id){

    if(this.getDurationOfLeaveForSalaryCalculation(id)==0){
        console.log('no leaves');
        this.leave_days=0;
    }else{
        this.leaveName=this.leaveObj.find(allow => allow.emp_id === this.eid).reason;
       // console.log(this.leaveName);
        //console.log(this.getDurationOfLeaveForSalaryCalculation(id));  
        this.leave_days=this.getDurationOfLeaveForSalaryCalculation(id);
    }
    if(this.leave_days==NaN||this.leave_days==''||this.leave_days==null){
      this.leave_days=0;
    }

    if(this.leaveName=='Anual'||this.leaveName=='Casual'){
      this.leaveDeduction=0;
    }else{
      if(this.leave_days>14){
        console.log('working')
        var noPayDays=this.leave_days-14;
        var dayPay=this.basic/30;
        this.noPay=dayPay*noPayDays;

      }else{
        this.leaveDeduction=0;
      }
    }

}*/

/*
getDurationOfLeaveForSalaryCalculation(id){
    var sal_start;
    var sal_end;
    var monthStart=this.month.find(mon=>mon.range_id==id).range_start;
    var monthEnd=this.month.find(mon=>mon.range_id==id).range_end;
    var monthRangeHour=Math.abs(new Date(monthEnd).getTime())-Math.abs(new Date(monthStart).getTime());
    var monthRange =  (Math.ceil(monthRangeHour / (1000 * 3600 * 24)))+1;
    var leaveStartGap=Math.abs(new Date(this.leave_start).getTime())-Math.abs(new Date(monthStart).getTime());
    var LeaveStartGapDays = Math.ceil(leaveStartGap / (1000 * 3600 * 24));
    var leaveEndGap=Math.abs(new Date(this.leave_end).getTime())-Math.abs(new Date(monthEnd).getTime());
    var LeaveEndGapDays = Math.ceil(leaveEndGap / (1000 * 3600 * 24));
   //get leave range
    var LeaveRangeHour=Math.abs(new Date(this.leave_end).getTime())-Math.abs(new Date(this.leave_start).getTime());
    var LeaveRangeDays = Math.ceil(LeaveRangeHour / (1000 * 3600 * 24));
    //find days
    if(LeaveStartGapDays<0){
      if((LeaveStartGapDays+LeaveRangeDays)<=0){
       // console.log('leave not consider');
      }else{
        sal_start=monthStart;
        if(LeaveEndGapDays<0){
          sal_end=this.leave_end;
        }else{
          sal_end=monthEnd;
        }
      }
    }else{
      if((LeaveRangeDays-LeaveStartGapDays)<monthRange){
        sal_start=this.leave_start;
        if(LeaveEndGapDays<0){
          sal_end=this.leave_end;
        }else{
          sal_end=monthEnd;
        }
      }else{
       // console.log('leave not consider');
      }
    }
    var salRangeDays=0;
    var salRangeHour=Math.abs(new Date(sal_end).getTime())-Math.abs(new Date(sal_start).getTime());
    salRangeDays =  (Math.ceil(salRangeHour / (1000 * 3600 * 24)))+1;
    //console.log('Salary calculation Start '+sal_start);
    //console.log('Salary calculation End '+sal_end);

      if(salRangeDays<0){
        return 0
      }else if(salRangeDays===NaN){
        return 0
      }else{
        return salRangeDays;
      }

}*/

/*total(){
    var x;
    if (confirm("Click OK to calaculate salary") == true) {
        this.gross_salary=this.basic+this.ot+this.sum;
        this.total_deduction= this.etf+this.sum2;
        this.total_salary=this.gross_salary-this.total_deduction;

    } else {
        x = "You pressed Cancel!";
    }





}*//*
print_pay(){
  var newitem={
    emp_id:this.eid,
    basic:this.basic,
    ot:this.ot,
    bonus:this.bonus,
    etf:this.etf,
    leave:0,
    total_amount:this.total_salary,
    traveling:this.traveling,
    medical:this.medical,
    house_rent:this.house_rent,
    entertainment:this.entertainment,
    union_charges:this.union_charges,
    loan_installment:this.loan_installment,
    date_of_payment:this.monthcurrent
  }


  console.log(newitem);
    this.view_emp.senddata(newitem).subscribe(data =>{
  
        console.log("OK");
  alert("salary was paid");
 

     this.print_pay2();
     
     });

}
print_pay2(){

       var newitem2={
        emp_id:this.eid,
        designation_id:this.designation_id,
        dept_id:this.dept_id,
           bank_code:this.bank_code,
        date_of_payment:this.monthcurrent,
       total_amount:this.total_salary,
       by_paid:this.paid
       }
           
           this.view_emp.senddata2(newitem2).subscribe(data =>{
  
        console.log("OK");
  //alert("ok");
     
     });



}
*/

}
