import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // import http client api
import {map} from 'rxjs/operators';
import {JwtHelperService } from '@auth0/angular-jwt';  // import jwt
// import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl = 'http://localhost:5000/api/auth/';     // url call api asp.net core 
jwtHelper = new JwtHelperService();
decodedToken: any;

constructor( private http: HttpClient) { }

// login form
 login(model: any) {

  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
        console.log(this.decodedToken);
      }

    })
  );
  }

  // register form
  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

// loggedin token
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}

