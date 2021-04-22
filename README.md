# PaypalApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Useful resourses(More in depth):
https://developer.paypal.com/docs/business/checkout/configure-payments/single-page-app/

## Steps for building:
1 step> First make Paypal business account 
Link: https://www.paypal.com/us/webapps/mpp/account-selection

2 step>once created visit paypal developer website
Link: https://developer.paypal.com/developer/applications/

3 step>Then in index.html
put Script tag:
<script
  src="https://www.paypal.com/sdk/js?client-id=">
</script>  

4 step>Further visit My Apps & Credentials, go to sandbox and click Create App

5 step>Then we will be redirected to SANDBOX API CREDENTIALS page

6 step>copy client id and page it into index.html script tag:
<script
  src="https://www.paypal.com/sdk/js?client-id= client id">
</script>  

7 step>next, we have to install NPM liberary "CreditCardPayments"
Code: npm i creditcardpayments

8 step> then put a <div> tag with some id
code: <div id="mybutton"></div>

9 step> From creditcardpayments package import render function
eg: import {render} from 'creditcardpayments/creditCardPayments' ;

10 STEP> Call render function.
render(
{
    id: "#payments",
    currency: "USD",
    value: "100.00",
  }
);

By now it should work. :D
Thanks everyone.
