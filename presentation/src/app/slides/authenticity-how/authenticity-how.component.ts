import { Component } from '@angular/core';

@Component({
  selector: 'app-authenticity-how',
  templateUrl: './authenticity-how.component.html',
  styleUrls: ['./authenticity-how.component.scss']
})
export class AuthenticityHowComponent {
  flowItems = [
    'Your browser is hardcoded to trust a bunch of "Root Certificate Authorities"',
    'Root CAs have ways to verify that you control a given domain',
    'They let you prove that. Then they give you a certificate, which is derived from their root certificate, which the browser verifies and trusts',
    'The entire internet is built on a bunch of implicitly trusted entities',
    'Control them, know everything',
    'Cool'
  ];
}
