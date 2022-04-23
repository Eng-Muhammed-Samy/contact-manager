import { NgModule } from "@angular/core";

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { MaterialModule } from "../shread/material.module";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ContentmanagerComponent } from "./contact-manager.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { Notes } from "./components/note/note.component";
import { NewContact } from "./components/new-contact/new-contact.component";

import { UserService } from "./services/user.service";
import { PostsService } from "./services/Posts.service";


const routes : Routes = [
  // syntax for lazy loading module
  {path:'', component : ContentmanagerComponent,
  children:[
    {path: ':id', component : MainContentComponent},
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
    ReactiveFormsModule
  ],
  declarations:[
    ContentmanagerComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent,
    Notes,
    NewContact
  ],
  providers:[UserService, PostsService]
})

export class ContactModule{}
