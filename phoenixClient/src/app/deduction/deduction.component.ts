import { Component, OnInit } from '@angular/core';
import { DeductionService } from '../services/deduction/deduction.service';
import{ Deductions } from'./deduction';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
  styleUrls: ['./deduction.component.css'],
    providers: [DeductionService]
})
export class DeductionComponent implements OnInit {
deduction;
button="Save";

//d:Deductions;
did:number;
dtype;
amount:number;

editeObject={
  did:this.did,
  dtype:this.dtype,
  amount:this.amount


};

  constructor(private deductionservice:DeductionService,private router:Router) { 

    this.deductionservice.getDeduction().subscribe(deduct => {
        console.log(deduct);
         this.deduction=deduct;
          console.log(this.deduction);
      });

      

  }

  ngOnInit() {
  }

  addOredit(event){
    if(this.editeObject.did==null||this.editeObject.dtype==null||this.editeObject.amount==null){
      alert('Please fill valid detail')
    }else{

            var emptyObj = {
              did:null,
              dtype:'',
              amount:null
            }

            if(this.button=="Update"){

              this.deductionservice.updatdedu(this.editeObject).subscribe(data => {
                      // console.log(data);
                    if(data=="ok"){
                        this.button="Save"
                          this.editeObject=emptyObj;
                    console.log(data);
                    }

                });

            }else if(this.button=="Save"){

              this.deductionservice.addOredit(this.editeObject).subscribe(data =>{
                if(data=="ok"){
                  this.deduction.push(this.editeObject);
                  this.editeObject=emptyObj;
                }
              
              
              });

            }
    
   }
  }


  deleteRow(deduc){
    var id=deduc.did;
      var deduction=this.deduction;
       this.deductionservice.deleteRow(deduc).subscribe(data => {
            // console.log(data);
          if(data=="ok"){
                  for(var i=0;i<deduction.length;i++){
                         if(deduction[i].did==id){
                         this.deduction.splice(i,1);
                         }
                   }
             
          }

       });
        }
editRow(editeduction){ 

this.editeObject=editeduction;
this.button="Update";
}







passname(deductions){
  this.router.navigate(['/deduction',deductions.dtype]);
}




}
