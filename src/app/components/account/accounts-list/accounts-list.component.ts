import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { AccountapiService } from 'src/app/service/accountapi.service';


@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  gridOptions: GridOptions;
  Account:any = [];

  columnDefs = [
    {
        headerName: "Name",
        field: "name",
        width: 100,
        sortable: true ,
        filter: true,  
        suppressMenu: true
    },
    {
        headerName: "Bank",
        field: "bank",
        width: 150,
        sortable: true ,
        filter: true,  
        suppressMenu: true
    },
    {
      headerName: "AccountType",
      field: "AccountType",
      width: 150,
      sortable: true ,
      filter: true,  
      suppressMenu: true
  },
  {
    headerName: "AccountNo",
    field: "AccountNo",
    width: 150,
    sortable: true ,
    filter: true,  
    suppressMenu: true
},
];
rowData : any;

  constructor(private accountapiService: AccountapiService) { 
    // this.readAccount();
  }

  ngOnInit() {
    this.rowData = this.accountapiService.getAccounts();
  }
  // readAccount(){
    
  //   this.accountapiService.getAccounts().subscribe((data) => {
  //    this.Account = data;
  //   })    
  // }

  removeAccount(account, index) {
    if(window.confirm('Are you sure?')) {
        this.accountapiService.deleteAccount(account._id).subscribe((data) => {
          this.Account.splice(index, 1);
        }
      )    
    }
  }


}
