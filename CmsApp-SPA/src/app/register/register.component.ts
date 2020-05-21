import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authServerice: AuthService) {}

  ngOnInit() {}

  register() {
    this.authServerice.register(this.model).subscribe(() => {
      console.log('registration successful');
    } ,error => {
      console.log(error);
    });
  }
  cencel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
