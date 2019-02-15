import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersComponent } from './customers.component';
import { CustomersGridComponent } from './customers-grid.component';
import { CustomersRoutingModule } from './routingmodule';

@NgModule({
  declarations:
  [
    CustomersComponent,CustomersCardComponent, CustomersGridComponent,CustomersRoutingModule.components
  ],
  exports:[CustomersComponent],
  imports: [
    CommonModule,CustomersRoutingModule
   
  ]
})
export class CustomersModule { }
