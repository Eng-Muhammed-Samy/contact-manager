import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/User';
import { Observable } from 'rxjs';

const SMALL_WIDTH_SCREEN = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isSmallScreen : boolean = true;

  users!: User[];

  constructor(private breakPointObseval: BreakpointObserver, private userService : UserService) { }

  ngOnInit(): void {
    this.breakPointObseval.observe([`(max-width : ${SMALL_WIDTH_SCREEN}px)`])
    .subscribe((state: BreakpointState)=>{this.isSmallScreen = state.matches});

    this.userService.getAllUsers().subscribe({
      next: data => this.users = data,
      error:err => console.log(err)

    })
  }
}
