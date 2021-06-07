import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { GridOptions } from "ag-grid-community";
import { Router } from '@angular/router';


@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {
  [x: string]: any;
   gridOptions: GridOptions;
   bank;
  Bank:any = [];
  columnDefs = [
    {
        headerName: "BankName",
        field: "name",
        width: 150,
        sortable: true ,
        filter: true,  
        
    },
    {
        headerName: "Branch",
        field: "branch",
        width: 100,
        sortable: true ,
        filter: true,  
        
    },
    {
      headerName: "IFSCCode",
      field: "ifsccode",
      width: 150,
      sortable: true ,
      filter: true,  
     
  },
  {
    headerName: "MICRCode",
    field: "micrcode",
    width: 150,
    sortable: true ,
    filter: true,  
   
},
  {
    headerName: "Location",
    field: "location",
    width: 100,
    sortable: true ,
    filter: true,  

},
{ field: '_id', suppressSizeToFit: true , width:  100 , headerName: 'Edit',
        cellRenderer: params => {
          return `Edit`;
        },
        onCellClicked: params => {
          this.router.navigateByUrl('/bank/edit-bank/');
        }
      },
  { field: '_id', suppressSizeToFit: true , width:  100 , headerName: 'Delete',
      cellRenderer: params => {
        return `delete`;
      },
      onCellClicked: params => {
        this.removeBank(this.bank,this.index);
        
      }
    },


];
   rowData : any;
  constructor(private apiService: ApiService, private router : Router) {
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
