import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  
   //{path:'bank',loadChildren:()=>import('./components/bank/bank.module').then(module=>module.BankModule) },

 
  // {path:'account',loadChildren:()=>import('./components/account/account.module').then(module=>module.AccountModule)},

  { path:'signup',component: UserComponent,
    children:[{path:'', component:SignUpComponent}]
  },
  { path:'login',component: UserComponent,
  children:[{path:'', component:SignInComponent}]
  },
  {
    path: 'userprofile' , component: UserProfileComponent,
     children:[{path:'bank',loadChildren:()=>import('./components/bank/bank.module').then(module=>module.BankModule)},
     {path:'account',loadChildren:()=>import('./components/account/account.module').then(module=>module.AccountModule)}]
    
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
