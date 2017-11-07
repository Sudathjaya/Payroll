import { Component } from '@angular/core';
import { PurchaseOrderService } from './services/purchase-order/purchase-order.service';
import{PaymentsService} from'./services/payments of employees/payments.service';
import{ViewEmployeeDetailsService} from './services/view_employee/view-employee-details.service';
import{ DeductionService } from './services/deduction/deduction.service';
import{ AllowanceService } from './services/allowance/allowance.service';
import{ DeductionEnteringServiceService } from './services/deduction_entering_service/deduction_entering_service.service';
import{ AllowanceInsertingServiceService } from './services/emp_allowa/allowance-inserting-service.service';
import{ ViweEmpAllowanceService } from './services/view_emp_allowance/viwe-emp-allowance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PurchaseOrderService,PaymentsService,ViewEmployeeDetailsService,DeductionService,DeductionEnteringServiceService,AllowanceInsertingServiceService,AllowanceService,ViweEmpAllowanceService],
  
})
export class AppComponent {
  title = 'app works!';
}
