import { Routes, RouterModule  } from '@angular/router';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';
import { CustomersComponent } from './customers.component';
import { NgModule } from '@angular/core';

const customersRoute:Routes = [
     {path:'',component:CustomersComponent},
     {path:'card',component:CustomersCardComponent}
]

@NgModule({
    imports:[RouterModule.forChild(customersRoute)],
    exports:[RouterModule]
})
export class CustomersRoutingModule{
    static components =[CustomersComponent,CustomersCardComponent,CustomersGridComponent]

}