import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { NgZone } from '@angular/core';

import { ApiService } from 'src/app/service/api.service';
import { AccountapiService} from 'src/app/service/accountapi.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  submitted = false;
  Bank:any = [];
  selectedBankId;
  

  accountForm=new FormGroup({
    name: new FormControl(),
    bank: new FormControl(),
   
    AccountType: new FormControl(),
    AccountNo: new FormControl()})

  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    private AccountapiService:AccountapiService
    
  ) {  }

  
  ngOnInit() {
    this.apiService.getBanks().subscribe((data) => {
      console.log(this.Bank = data);
     })    

}


mainForm() {
  this.accountForm = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    bank: [''],
 
    AccountType: ['',[Validators.required]],
    AccountNo: ['']
  })
}
 setBankDetails(){
   console.log(this.selectedBankId);
    const bank=this.Bank.some(x=> x.name===this.selectedBankId);
   if(bank)
    this.accountForm.controls.bankId.setValue(bank._Id);

  }

 

onSubmit() {
  this.submitted = true;
  if (!this.accountForm.valid) {
    return false;
  } else {
    this.AccountapiService.createAccount(this.accountForm.value).subscribe(
      (res) => {
        console.log('Account is successfully created!');
        
        this.ngZone.run(() => this.router.navigateByUrl('/account/accounts-list'))
      }, (error) => {
        console.log(error);
      });
  }
}
}