import { NgModule } from "@angular/core";

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../shread/material.module";
import { Routes, RouterModule } from "@angular/router";

import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ContentmanagerComponent } from "./contact-manager.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./services/user.service";
import { CommonModule } from "@angular/common";


const routes : Routes = [
  // syntax for lazy loading module
  {path:'', component : ContentmanagerComponent, children:[
    {path: '', component : MainContentComponent}
  ] },
  {path:'**', redirectTo :''}
];

@NgModule({
  imports:[
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  declarations:[
    ContentmanagerComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent
  ],
  providers:[UserService]
})

export class ContactModule{}
