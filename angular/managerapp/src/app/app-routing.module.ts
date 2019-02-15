import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersCardComponent } from './customers/customers-card.component';
import { CustomersGridComponent } from './customers/customers-grid.component';
const routes: Routes = [
  {path:'orders',component:OrdersComponent},
  {
    path: 'customers',
    component: CustomersComponent,
    children:[
      {path:'card', component:CustomersCardComponent},
      {path:'contact', component:CustomersGridComponent},
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



