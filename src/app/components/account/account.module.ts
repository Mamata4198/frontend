import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountsEditComponent } from './accounts-edit/accounts-edit.component';

import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-route.module';
import { AccountsComponent } from './accounts/accounts.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    
    AccountsListComponent,
    AccountsEditComponent,
    AccountComponent,
    AccountsComponent
 
  ],
  imports: [
   CommonModule,
   FormsModule,
   ReactiveFormsModule,
   AccountRoutingModule,
   AgGridModule.withComponents([])
   
  ],
  providers: []
  
 
})
export class AccountModule { }
