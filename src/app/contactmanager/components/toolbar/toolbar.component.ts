import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewContact } from '../new-contact/new-contact.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleButtonSideNav :EventEmitter<void> = new EventEmitter();
  @Output() togleTheme :EventEmitter<void> = new EventEmitter();
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog():void{
    this.dialog.open(NewContact, {
      width: '450px'
    })
  }
}
