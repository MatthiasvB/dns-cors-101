import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {addClassToElementForTime} from '../../shared/utils';

@Component({
  selector: 'app-problem-to-solve',
  templateUrl: './problem-to-solve.component.html',
  styleUrls: ['./problem-to-solve.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProblemToSolveComponent {

  constructor() {
  }

  ngOnInit(): void {
  }

  readonly codes = [
    `public getUserEmail$(userId: string): Observable<string> {
    return this.http.get<string>(
        environment.backendUrl + \`/users/details/email/$\{userId}\`
    );
}`,
  `const ENDPOINTS = {
    email: "/users/details/email/",
    name: "/users/details/name/",
    birthDay: "/users/details/birthday/"
}

public getUserEmail$(userId: string): Observable<string> {
    return this.http.get<string>(
        environment.backendUrl + ENDPOINTS.email + userId
    );
}`
  ];

  codeIndex = 0;

  goToNextCode = () => {
    this.codeIndex = this.codeIndex < this.codes.length - 1 ? this.codeIndex + 1 : 0;
  }

  goToPrevCode = () => {
    this.codeIndex = this.codeIndex > 0 ? this.codeIndex - 1 : this.codes.length - 1;
  }
}
