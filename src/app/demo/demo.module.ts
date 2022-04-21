import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from '../shread/material.module';
import { ButtonComponent } from "./button/button.component";
import { DemoRoutingModule } from "./demo-routing.module";
import { FelxboxComponent } from './felxbox/felxbox.component';

@NgModule({
  imports:[
    CommonModule,
    DemoRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ],
  declarations:[
    ButtonComponent,
    FelxboxComponent
  ]
})

export class DemoModule{}
