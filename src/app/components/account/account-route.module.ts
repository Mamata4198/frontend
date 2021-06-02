import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountsEditComponent } from './accounts-edit/accounts-edit.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailsComponent } from './account-details/account-details.component';






const routes: Routes = [
    
        {path:'',component:AccountComponent,children:[
        { path: '', pathMatch: 'full', redirectTo: 'create-account' },
        {path:'create-account',component: AccountsComponent},
        { path: 'create-account', component: AccountsComponent },
        { path: 'accounts-list', component: AccountsListComponent },
        { path: 'edit-account/:id', component: AccountsEditComponent },
        
          { path:'details',component:AccountDetailsComponent},

    ]}


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
