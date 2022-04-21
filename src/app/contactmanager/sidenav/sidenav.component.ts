import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

const SMALL_WIDTH_SCREEN = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isSmallScreen : boolean = true;

  constructor(private breakPointObseval: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakPointObseval.observe([`(max-width : ${SMALL_WIDTH_SCREEN}px)`])
    .subscribe((state: BreakpointState)=>{this.isSmallScreen = state.matches})
  }

}
