
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Bank } from 'src/app/model/bank';
import { ApiService } from 'src/app/service/api.service';



@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.css']
})
export class BankEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  bankData: Bank[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateBank();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getBank(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      code: ['', [Validators.required]],
      location: ['', [Validators.required]]
    })
  }
  get myForm(){
    return this.editForm.controls;
  }
  getBank(id) {
    this.apiService.getBank(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        branch: data['branch'],
        code: data['code'],
        location: data['location'],
      });
    });
  }

  updateBank() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      code: ['', [Validators.required]],
      location: ['', [Validators.required]]
     
    })
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateBank(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/bank/banks-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

  
}
