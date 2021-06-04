import { Component, OnInit } from '@angular/core';
import { AccountDetailsApiService } from 'src/app/service/account-details-api.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  [x: string]: any;
  columnDefs = [
    {
        headerName: "slNo",
        field: "slNo",
        width: 70,
        sortable: true ,
        filter: true,  
        
    },
    {
        headerName: "transactionNo",
        field: "transactionNo",
        width: 150,
        sortable: true ,
        filter: true,  
        
    },
    {
      headerName: "transaction",
      field: "transaction",
      width: 150,
      sortable: true ,
      filter: true,  
     
  },
  {
    headerName: "credit",
    field: "credit",
    width: 100,
    sortable: true ,
    filter: true,  

},
{
  headerName: "debit",
  field: "debit",
  width: 100,
  sortable: true ,
  filter: true,  

},
{
  headerName: "total",
  field: " ",
  width: 100,
  sortable: true ,
  filter: true,  

}



];
   rowData : any;

  constructor(private accountDetailsApiService: AccountDetailsApiService) { }

  ngOnInit() {
    this.rowData = this.accountDetailsApiService. getAccountsDetails();
  }

}
