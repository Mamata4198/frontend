import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from 'src/app/model/account';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { AccountapiService } from 'src/app/service/accountapi.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-accounts-edit',
  templateUrl: './accounts-edit.component.html',
  styleUrls: ['./accounts-edit.component.css']
})
export class AccountsEditComponent implements OnInit {
  submitted = false;
  Bank:any=[];
  selectedBankId;
  accountData: Account[];
  editForm=new FormGroup({
    name: new FormControl(),
    bank: new FormControl(),
    AccountType: new FormControl(),
    AccountNo: new FormControl()})



  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private accountapiService: AccountapiService,
    private router: Router,
    private apiService: ApiService,
  ) { }
 

  ngOnInit() {
    
    this.updateAccount();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getAccount(id);
    this.editForm = this.fb.group({
      name: [''],
      bank: [''],
      AccountType: [''],
      AccountNo: ['']
    })
     this.apiService.getBanks().subscribe((data) => {
       this.Bank = data;
      })    
  }
  get myForm(){
    return this.editForm.controls;
  }
  getAccount(id) {
    this.accountapiService.getAccount(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        bank: data['bank'],
        AccountType: data['AccountType'],
        AccountNo: data['AccountNo'],
      });
    });
  }

  updateAccount() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      bank: ['', [Validators.required]],
      AccountType: ['', [Validators.required]],
      AccountNo: ['', [Validators.required]]
     
    })
  }
   setBankDetails(){
     console.log(this.selectedBankId);
      const bank=this.Bank.some(x=> x.name===this.selectedBankId);
      if(bank)
      this.editForm.controls.bankId.setValue(bank._Id);
  
   }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.accountapiService.updateAccount(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/account/accounts-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
