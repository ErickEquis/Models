import { NgModule } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [],
  exports:[
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule

  ]

})
export class MaterialModule { }
