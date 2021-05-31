import { Router } from '@angular/router';
import { Component, OnInit,NgZone } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-bank-create',
  templateUrl: './bank-create.component.html',
  styleUrls: ['./bank-create.component.css']
})
export class BankCreateComponent implements OnInit {
  
  submitted = false;
  bankForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { this.mainForm(); }

  ngOnInit() {
  }
  mainForm() {
    this.bankForm = this.fb.group({
      name: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      code: ['', [Validators.required]],
      location: ['', [Validators.required]]
    })
  }
   
 
  onSubmit() {
    this.submitted = true;
    if (!this.bankForm.valid) {
      return false;
    } else {
      this.apiService.createBank(this.bankForm.value).subscribe(
        (res) => {
          console.log('Bank is successfully created!');
          
          this.ngZone.run(() => this.router.navigateByUrl('/bank/banks-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
