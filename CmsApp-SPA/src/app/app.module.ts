import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';  //import httpclient
import {FormsModule} from '@angular/forms';   //import form modules
import { BsDropdownModule} from 'ngx-bootstrap';  //import ngx version 3.0.1

import { AppComponent } from './app.component';  //import app component
import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';  //import service
import { HomeComponent } from './home/home.component';   //import componet home
import { RegisterComponent } from './register/register.component'; //import componet register
import { ErrorInterceptor, ErrorInterceptorProvider } from './_services/error.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot()  
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
