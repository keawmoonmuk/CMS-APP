import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(message: string , okCallback : ()  => any) {
alertify.confirm(message, (e: any) => {
if (e) {
  okCallback();
} else {}
});
}
//success
success(message: string) {
  alertify.success(message);
}
//error
error(message: string) {
  alertify.error(message);
}
//waring
waring(message: string) {
  alertify.waring(message);
}
//mesasge
message(message: string) {
  alertify.message(message);
}


}
