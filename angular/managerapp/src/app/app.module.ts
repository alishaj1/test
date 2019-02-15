import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';
import { RouterModule } from '@angular/router';
import { route } from './route';
import { DataService } from './core/services/data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
     HttpClientModule,
    CoreModule, 
    CustomersModule, 
    OrdersModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }