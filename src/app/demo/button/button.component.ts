import { Component } from "@angular/core";

@Component({
  selector:'app-buttom',
  template:`
    <button mat-raised-button color="accent">
    <mat-icon>home</mat-icon> Accent
    </button>
    <br />
    <mat-checkbox>Check me!</mat-checkbox>
  `
})

export class ButtonComponent{

}
