import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../services/payments of employees/payments.service';
import { Router } from '@angular/router';
import{ Payments } from'./payments';
@Component({
 
  selector: 'app-payments-of-employees',
  templateUrl: './payments-of-employees.component.html',
  styleUrls: ['./payments-of-employees.component.css'],
   providers: [PaymentsService]
})

export class PaymentsOfEmployeesComponent implements OnInit {
  payments;
  month_id:number;
  details;
  btype:string[];
  month;
  month_get:number;
  test;
  date;
  employeeid;
  eid;
  basic;
  ot:any;
  gross_salary;
  cc;
  total_amount:any;
  basic_salary;
  attend;
  emp_id:any;
  workhours;
  index:number;
  index2:number;
  count:number;
  overtime:number;
  ot_per_hour:number;
  getot;
  index5:number;
  ot2;
  filterdata;
  ottime:any;
  emp_data1;
  final_ot;
  tot;
  con=0;
  emp_allowance;
  total_allowance:any;
  emp_deduction;
  total_deduction:any;
  date_of_payment;
  epf:any;
 /* constructor(private paymentsservice:PaymentsService, private router:Router) { 
this.paymentsservice.getDetail().subscribe(item => {
        console.log(item);
        // this.detail=item;
         // console.log(this.detail);
      });

}*/
  constructor(private paymentsService:PaymentsService, private router:Router) { 
  this.total_amount= new Array();
  this.ottime= new Array();
  this.total_allowance= new Array();
  this.total_deduction = new Array();
  this.paymentsService.getemployee().subscribe(paid => {
        //console.log(paid);
  this.payments=paid;
  console.log()
  var count=Object.keys(paid).length;
      
  this.btype=new Array(count);
         // console.log(this.payments);
  });
//get data from range of month table
  paymentsService.getdataofpastmonth().subscribe(mon=>{
  this.month=mon;
  })

      

  }

  ngOnInit() {

  this.paymentsService.getot_scale().subscribe(item7=>{
      //this.worktime=item6;;
  this.getot=item7;
  });

  this.paymentsService.geteattendac().subscribe(item5=>{
  this.emp_data1=item5;
  });
 
  this.paymentsService.geteattendac2()
  .subscribe(item6=>{
      //this.worktime=item6;;
  this.index5= item6;

  this.count=(this.index5[0].count*9);
      
     // console.log("value is"+this.count);
    
  });
  this.paymentsService.getemp4()
  .subscribe(emp_allowance1=>{
  this.emp_allowance=emp_allowance1;
  });
  this.paymentsService.getemp5()
  .subscribe(emp_deduction1=>{
  this.emp_deduction=emp_deduction1;
  });
  //this.paymentsService.getbank_name()
  //.subscribe(bank_name1=>{
  //this.bank_name=bank_name1;
  
  //});
  
  
  var date_of_payment1=new Date().getFullYear();
   var date_of_payment2=new Date().getMonth();
   var date_of_payment3=new Date().getDate();
this.date_of_payment=date_of_payment1+"/"+date_of_payment2+"/"+date_of_payment3;

    
 }





 getMonth(id){
this.date_of_payment=null;
 this.month_id=id;
//console.log(this.month_id);
 this.paymentsService.getdataofpastpayments()
 .subscribe(details=>{
    // console.log(item3);
  
     // for(var a=0;a<item3.length;a++){
  var filterdata = details.filter(dedu => dedu.date_of_payment == this.month_id);
  this.payments=filterdata;
      //console.log(this.payments);
       // console.log("this.payments");
   // }
  });

          

  }







  btest(payment){
  var bedit={
  emp_id:payment.emp_id,
  bank_type:this.btype
  }

     //this.paymentsService.updatep_btype(bedit).subscribe(data => {
            // console.log(data);
        
             

          

     // });

 


 }

 test1(payment){

 this.router.navigate(['/payments',payment.emp_id,this.date]);
  

 }
 test2(payment){

 this.router.navigate(['/payments',payment.emp_id]);
  

 }
 
    



  
  gettotal(){
 var x;
if (confirm("Click OK to calaculate salary") == true) {
      //var i;
      //var ot=this.asd(3);
     
  this.paymentsService.getemployee().subscribe(paid => {
       // this.payments=paid;
        //console.log(paid);
  for(var a=0;a<paid.length;a++){
        // this.ottime=0;
     
  this.asd(paid[a].emp_id);
  }
  setTimeout(()=>{
  for(var a=0;a<paid.length;a++){
                 // console.log("kkkkkkkkk");
  this.asd(paid[a].emp_id);
  //console.log(paid[a].emp_id);
           //console.log(this.ottime+"Ok");
  this.total_amount[a]=paid[a].basic_salary+this.ottime[a]+this.total_allowance[a]-this.total_deduction[a];
  }
  },1000);
       // }
        
  });
  }
   else {
        x = "You pressed Cancel!";
    }


  }








asd(emp_id){
   //emp_id=1;
var ot=0;
var total_ot=0;
this.final_ot=0;
var tot_alowance=0;
var tot_deduction=0;

//get OT scales per hour
  

      
     // console.log(this.ot_per_hour);
     






var emp_data=this.emp_data1.filter(dt=>dt.emp_id==emp_id);
var emp_allo=this.emp_allowance.filter(dt=>dt.emp_all_id==emp_id); 
var emp_deduc=this.emp_deduction.filter(dt=>dt.emp_deduct_id==emp_id); 


 //console.log(emp_allo);    
for(var a=0;a<emp_data.length;a++){
var gap=parseFloat(emp_data[a].attend_out)-parseFloat(emp_data[a].attend_in);
if(gap>9){
ot=gap-9;
}
      
total_ot=total_ot+ot;
          
}

for(var a=0;a<emp_allo.length;a++){
tot_alowance=tot_alowance+emp_allo[a].a_amount;
  
}
for(var a=0;a<emp_deduc.length;a++){
tot_deduction=tot_deduction+emp_deduc[a].d_amount;
  
}





    
setTimeout(()=>{
this.ot_per_hour=this.getot.find((emp:any)=>emp.emp_id===emp_id).ot_per_hour;

this.final_ot=this.ot_per_hour * total_ot;
     // console.log(this.final_ot);
this.total_allowance.push(tot_alowance); 
this.total_deduction.push(tot_deduction); 
this.ottime.push(this.final_ot);
       
return 0;
},1000);
    
}

print_pay2(){
  var x;
    if (confirm("Click OK to Save ") == true) {     
//setTimeout(()=>{
var paid="paid";
//console.log("hello");
//console.log(this.payments);
//console.log(this.total_amount);
for(var a=0;a<this.payments.length;a++){
var newitem2={
emp_id:this.payments[a].emp_id,
designation_id:this.payments[a].designation_id,
dept_id:this.payments[a].dept_id,
bank_code:this.payments[a].bank_code,
date_of_payment:new Date().getMonth(),
total_amount:this.total_amount[a],
by_paid:paid
}
//console.log(newitem2);
this.paymentsService.senddata2(newitem2).subscribe(data =>{
  
//console.log("OK");
  //alert("ok");
     
     });

}        
//},1000);
this.print_pay();
    }
    else {
        x = " press Cancel!";
    }
}



print_pay(){
    for(var a=0;a<this.payments.length;a++){
        this. epf=(this.payments[a].basic_salary * 0.08)/6;
  var newitem={
    emp_id:this.payments[a].emp_id,
    basic:this.payments[a].basic_salary,
    ot:this.ottime[a],
    bonus:0,
    epf:this.epf.toFixed(0),
    leave:0,
    total_amount:this.total_amount[a],
    traveling:0,
    medical:0,
    house_rent:0,
    entertainment:0,
    union_charges:0,
    loan_installment:0,
    date_of_payment:new Date().getMonth()
  }


  console.log(newitem);
    this.paymentsService.senddata(newitem).subscribe(data =>{
  
        console.log("OK2");
  //alert("salary was paid");
 

     //this.print_pay2();
     
     });
    }

}




}
