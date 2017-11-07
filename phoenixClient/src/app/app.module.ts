import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { PaymentsOfEmployeesComponent } from './payments-of-employees/payments-of-employees.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { DeductionComponent } from './deduction/deduction.component';
import { AllowancesComponent } from './allowances/allowances.component';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDeductionEnteringComponent } from './employee-deduction-entering/employee-deduction-entering.component';

import { EmployeeAllowInsertComponent } from './employee-allow-insert/employee-allow-insert.component';
import { ViewEmpDeductionComponent } from './view_emp_deduction/view-emp-deduction.component';
import { ViewEmpAllowanceComponent } from './view-emp-allowance/view-emp-allowance.component';
import { PresentMonthComponent } from './present-month/present-month.component';


@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    SideMenuComponent,
    PurchaseOrderComponent,
    AddProductComponent,
    ProductComponent,
    PaymentsOfEmployeesComponent,
    EmployeeInfoComponent,
    DeductionComponent,
    AllowancesComponent,
    EmployeeComponent,
    EmployeeDeductionEnteringComponent,
    EmployeeAllowInsertComponent,
    ViewEmpDeductionComponent,
    ViewEmpAllowanceComponent,
    PresentMonthComponent

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [MaterialModule.forRoot()],
    RouterModule.forRoot([
      { path: 'addproduct', component: AddProductComponent},
      { path: 'product', component:ProductComponent}, 
      { path: 'purchaseorder', component:PurchaseOrderComponent},
      {path:'payments',component:PaymentsOfEmployeesComponent},
      { path: 'payments/:id/:id1', component:EmployeeInfoComponent},
      { path: 'employeeinfo', component:EmployeeInfoComponent},
      { path: 'deduction', component:DeductionComponent},
      { path: 'allowances', component:AllowancesComponent},
      { path: 'employee_deduction_enetring', component:EmployeeDeductionEnteringComponent},
      { path: 'employee_allowance_inserting', component:EmployeeAllowInsertComponent},
      { path: 'view_emp_deduction', component:ViewEmpDeductionComponent},
      { path: 'deduction/:name', component:ViewEmpDeductionComponent},
      { path: 'allowances/:name1', component:ViewEmpAllowanceComponent},
      { path: 'view_emp_allowance', component:ViewEmpAllowanceComponent},
          { path: 'present_month', component:PresentMonthComponent},
              { path: 'payments/:id', component:PresentMonthComponent}
     
     
     
             
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
