import { Component, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_SCREEN = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isSmallScreen : boolean = true;
  isDarkTheme: boolean = false
  users!: User[];

  @ViewChild(MatDrawer) drawer!:MatDrawer ;

  constructor(private breakPointObseval: BreakpointObserver, private userService : UserService, private router: Router) { }

  ngOnInit(): void {
    this.breakPointObseval.observe([`(max-width : ${SMALL_WIDTH_SCREEN}px)`])
    .subscribe((state: BreakpointState)=>{this.isSmallScreen = state.matches});

    this.userService.getAllUsers().subscribe({
      next: data => this.users = data,
      error:err => console.log(err)
    })

    // always display data of user no, one
    this.userService.getAllUsers().subscribe(data=>{
      if(this.users.length > 0) this.router.navigate(['/contactmanage', this.users[0].id])
    })

    // close sidenave when select new user
    this.router.events.subscribe(()=>{
      if(this.isSmallScreen){
        this.drawer.close();
      }
    })
  }
  toggleThemeEvent(){
    this.isDarkTheme = !this.isDarkTheme;
  }
}
