import { Component } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PaypalApplication';

  constructor() {
    render({

      id: "#myPaypalButtons",

      value: "200",

      currency: "USD",

      onApprove: (details: any) => {
        alert("Transfer Successful");


      }

    });
  }
}
