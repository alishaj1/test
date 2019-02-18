import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { CustomerComponent } from './customer.component';


const route:Routes =[
  { path:'',
    component:CustomerComponent,
    children: [
      {path:'details',component:CustomerDetailsComponent},
      {path:'orders',component:CustomerOrdersComponent},
      {path:'edit',component:CustomerEditComponent}
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports:[RouterModule],
  //providers:[CanActivateGaurd]
})
export class CustomerRoutingModule {
  static component = [CustomerComponent,CustomerDetailsComponent,CustomerEditComponent,CustomerOrdersComponent]
 }