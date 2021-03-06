import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerDetailsComponent } from './pages/customer-details/customer-details.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    CustomersComponent, 
    CustomerDetailsComponent, 
    CustomerEditComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    DataTablesModule
  ]
})
export class CustomersModule { }
