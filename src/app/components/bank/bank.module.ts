import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BankCreateComponent } from './bank-create/bank-create.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankComponent } from './bank.component';
import { CommonModule } from '@angular/common';
import { BankRoutingModule } from './bank-route.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
   
    BankCreateComponent,
    BankEditComponent,
    BankListComponent,
   BankComponent
    
   
  
 
  ],
  imports: [
   CommonModule,
   BankRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   AgGridModule.withComponents([])
   

   
  ],
  providers: []
  
 
})
export class BankModule { }
