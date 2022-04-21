import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




const routes : Routes = [
  // syntax for lazy loading module
  {path:'contactmanage', loadChildren : ()=> import('./contactmanager/contact-manager.module').then(m => m.ContactModule)},
  { path :'demo', loadChildren:()=>import('./demo/demo.module').then (m=> m.DemoModule)},
  {path:'**', redirectTo :'contactmanage'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
