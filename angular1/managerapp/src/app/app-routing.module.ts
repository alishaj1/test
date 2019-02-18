import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersCardComponent } from './customers/customers-card.component';
import { CustomersGridComponent } from './customers/customers-grid.component';
import { CustomerDetailsComponent} from './customer/customer-details.component';
const routes: Routes = [
 // {path:'customers/:id',loadChildren :'./customer/customer.module#CustomerModule'},
  {
    path: 'customers',
    component: CustomersComponent,
    children:[
      {path:'card', component:CustomersCardComponent},
      {path:'grid', component:CustomersGridComponent},
    ]
  },
  {path:'customers/:id',component:CustomerDetailsComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



