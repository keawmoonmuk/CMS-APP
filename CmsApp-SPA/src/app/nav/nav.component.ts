import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';  // import servie api
import { AlertifyService } from '../_services/alertify.service';  // import alertify severice
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService,  private router: Router) { }

  ngOnInit() {
  }

  // login
  login() {
    this.authService.login(this.model).subscribe(next => {
      // console.log('Logged in successfully');
      this.alertify.success('logged in successfully');  
    } , error => {
      // alertify error
    this.alertify.error(error);
    }, () => {
      this.router.navigate(['/member']);
    });
  }
// get token
  loggedIn() {
   return this.authService.loggedIn();    // link to auth.service.ts file
  }

  // logout
  logout (){
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
    // console.log('logged out');
  }

}
