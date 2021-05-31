import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import {GridOptions,ICellRendererParams} from "ag-grid-community";
import { ITooltipAngularComp } from 'ag-grid-angular';
import { ITooltipParams } from 'ag-grid-community';


@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {
  private gridOptions: GridOptions;
  Bank:any = [];
  columnDefs = [
    {
        headerName: "BankName",
        field: "name",
        width: 150,
        sortable: true ,
        filter: true,  
        suppressMenu: true
    },
    {
        headerName: "Branch",
        field: "branch",
        width: 100,
        sortable: true ,
        filter: true,  
        suppressMenu: true
    },
    {
      headerName: "Code",
      field: "code",
      width: 150,
      sortable: true ,
      filter: true,  
      suppressMenu: true
  },
  {
    headerName: "Location",
    field: "location",
    width: 100,
    sortable: true ,
    filter: true,  
    suppressMenu: true
},


];
   rowData : any;
  constructor(private apiService: ApiService) {
    // this.readBank();
    // this.gridOptions = <GridOptions>{
     
     
    // };
    // this.gridOptions.
   }
   

  ngOnInit() {
    this.rowData = this.apiService.getBanks();
  
    
  }
  // readBank(){
    
  //   this.apiService.getBanks().subscribe((data) => {
  //    this.Bank = data;
  //   })    
  // }

  removeBank(bank, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteBank(bank._id).subscribe((data) => {
          this.Bank.splice(index, 1);
        }
      )    
    }
  }

 
  

}
