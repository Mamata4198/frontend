import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import  {MatCardModule } from '@angular/material';
import  {MatIconModule} from '@angular/material';
import  {MatTabsModule } from '@angular/material';
import  {MatCheckboxModule} from '@angular/material';
import  {MatFormFieldModule} from '@angular/material/form-field';
import  {MatInputModule} from '@angular/material';
import { MatSelectModule } from '@angular/material';

import {} from '@angular/material';
const MaterialComponents =[
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatSelectModule ,
  MatTabsModule ,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  
];




@NgModule({
  
  imports:[MaterialComponents],
  exports:[MaterialComponents]
  
})
export class MaterialModule { }
