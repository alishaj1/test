import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerOrdersComponent } from './customer-orders.component';

@NgModule({
  declarations: [CustomerDetailsComponent, CustomerEditComponent, CustomerOrdersComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
