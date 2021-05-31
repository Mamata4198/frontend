import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankCreateComponent } from './bank-create/bank-create.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankComponent } from './bank.component';





const routes: Routes = [
    
    {path:'',component:BankComponent,children:[
        { path: '', pathMatch: 'full', redirectTo: 'create-bank' },
  { path: 'create-bank', component: BankCreateComponent },
  { path: 'edit-bank/:id', component: BankEditComponent },
  { path: 'banks-list', component: BankListComponent },

    ]}


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
