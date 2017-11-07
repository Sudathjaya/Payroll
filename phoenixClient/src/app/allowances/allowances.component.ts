import { Component, OnInit } from '@angular/core';
import { AllowanceService } from '../services/allowance/allowance.service';
import{ Allowance } from './allowance';
import {Router} from '@angular/router';

@Component({
  selector: 'app-allowances',
  templateUrl: './allowances.component.html',
  styleUrls: ['./allowances.component.css'],
   providers: [AllowanceService]
})
export class AllowancesComponent implements OnInit {
allowance;
button="Save";
allowance_a:Allowance[];
aid:number;
atype;
amount:number;
editeObject1={
  aid:this.aid,
  atype:this.atype,
  amount:this.amount


};

  constructor(private allowanceservice:AllowanceService,private router:Router) { 

    this.allowanceservice.getAllowance().subscribe(allowa => {
        console.log(allowa);
         this.allowance=allowa;
          console.log(this.allowance);
      });

  }

  ngOnInit() {
  }

 


 addallowance(event){
 if(this.editeObject1.aid==null||this.editeObject1.atype==null||this.editeObject1.amount==null){
      alert('Please fill valid detail')
 }else{
 
 var emptyObj1 = {
    aid:null,
    atype:'',
    amount:null
  }

  if(this.button=="Update"){

     this.allowanceservice.updateallowa(this.editeObject1).subscribe(data => {
            // console.log(data);
          if(data=="ok"){
               this.button="Save"
                this.editeObject1=emptyObj1;
           console.log(data);
          }

       });

  }else if(this.button=="Save"){

    this.allowanceservice.addallowance(this.editeObject1).subscribe(data =>{
      if(data=="ok"){
        this.allowance.push(this.editeObject1);
        this.editeObject1=emptyObj1;
        console.log(data);
      }
     
     
     });

  }
 }
  }


  deleteRow(allow){
    var id=allow.aid;
      var allowance=this.allowance;
       this.allowanceservice.deleteRow(allow).subscribe(data => {
            // console.log(data);
          if(data=="ok"){
                  for(var i=0;i<allowance.length;i++){
                         if(allowance[i].aid==id){
                         this.allowance.splice(i,1);
                         }
                   }
             
          }

       });
       
  
   
  }








editRow(editallowance){ 

this.editeObject1=editallowance;
this.button="Update";
}
/*
 updatdedu(newtype){
  var id=newtype.aid;
      var allowance=this.allowance;
       this.allowanceservice.updateallowa(newtype).subscribe(data => {
            // console.log(data);
          if(data=="ok"){
               
           console.log(data);
          }

       });





}*/

passname1(allowances){
  console.log("ok");
  console.log(allowances.atype);
  this.router.navigate(['/allowances',allowances.atype]);
}

}









