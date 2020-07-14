import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { ListsComponent } from "./lists/lists.component";
import { AuthGuard } from "./_guards/auth.guard"; // import guards
import { PaymentsComponent } from "./payments/payments.component";
import { MedicalrecordComponent } from "./medicalrecord/medicalrecord.component";

export const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      { path: "members", component: MemberListComponent },
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: ListsComponent },
      { path: "payments", component: PaymentsComponent },
      { path: "registerPatients", component: MedicalrecordComponent },
    ],
  },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];
