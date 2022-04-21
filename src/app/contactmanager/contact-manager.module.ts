import { NgModule } from "@angular/core";

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../shread/material.module";
import { Routes, RouterModule } from "@angular/router";

import { ToolbarComponent } from '../contactmanager/toolbar/toolbar.component';
import { SidenavComponent } from '../contactmanager/sidenav/sidenav.component';
import { MainContentComponent } from '../contactmanager/main-content/main-content.component';
import { ContentmanagerComponent } from "./contact-manager.component";


const routes : Routes = [
  // syntax for lazy loading module
  {path:'', component : ContentmanagerComponent, children:[
    {path: '', component : MainContentComponent}
  ] },
  {path:'**', redirectTo :''}
];

@NgModule({
  imports:[
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations:[
    ContentmanagerComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent
  ]
})

export class ContactModule{}
