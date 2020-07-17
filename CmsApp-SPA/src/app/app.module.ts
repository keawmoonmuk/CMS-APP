import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"; // import httpclient
import { FormsModule } from "@angular/forms"; // import form modules
import { BsDropdownModule } from "ngx-bootstrap"; // import ngx version 3.0.1
import { RouterModule } from "@angular/router"; // import route module

import { AppComponent } from "./app.component"; // import app component
import { from } from "rxjs";
import { NavComponent } from "./nav/nav.component"; // component nav
import { AuthService } from "./_services/auth.service"; // import service
import { HomeComponent } from "./home/home.component"; // import componet home
import { RegisterComponent } from "./register/register.component"; // import componet register
import {
  ErrorInterceptor,
  ErrorInterceptorProvider,
} from "./_services/error.interceptor";
import { MemberListComponent } from "./member-list/member-list.component"; // componets member
import { ListsComponent } from "./lists/lists.component"; // component list
import { MessagesComponent } from "./messages/messages.component"; // component message
import { appRoutes } from "./routes"; // import routes in file routes.ts
import { PaymentsComponent } from "./payments/payments.component"; // component payments
import { MedicalrecordComponent } from "./medicalrecord/medicalrecord.component"; //component medical record
import { PriceListComponent } from "./price-list/price-list.component"; // component price list
import { SettingsComponent } from "./settings/settings.component"; //  component settings
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    PaymentsComponent,
    MedicalrecordComponent,
    PriceListComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes), // import routes modules
  ],
  providers: [AuthService, ErrorInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
