import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ideal-api',
  templateUrl: './ideal-api.component.html',
  styleUrls: ['./ideal-api.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IdealApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly codes = [
    `public getSomePath$(): Observable<SomeType> {
    return this.http.get<SomeType>(
        environment.backendUrl + "/path/to/what/i/want"
    );
}`,
    `public getSomePath$(): Observable<SomeType> {
    return this.http.get<SomeType>(
        ROUTES.backend.path.to.what.i.want
    );
}`,
    `public getNotExist$(): Observable<never> {
    return this.http.get<never>(
        ROUTES.backend.path.to.not.exist // Error: Key "not" does not exist
    );
}`,
    `public getUserEmail$(userId: string): Observable<string> {
    return this.http.get<string>(
        environment.backendUrl + \`/user/\${userId}/details/email\`
    );
}`,
    `public getUserEmail$(userId: string): Observable<string> {
    return this.http.get<string>(
        ROUTES.backend.user/*?userId?*/details.email
    );
}`,
    `public getUserEmail$(userId: string): Observable<string> {
    return this.http.get<string>(
        ROUTES.backend.user.$id(userId).details.email
    );
}`,
    `public getUserEmail$(userId: string): Observable<string> {
    return this.http.get<string>(
        ROUTES.backend.user.$id(userId).details.email
    );
}

public getUser$(userId: string): Observable<User> {
    return this.http.get<User>(
        ROUTES.backend.user.$id(userId) // Error: Object not assignable to type "string"
    );
}`,
    `public getUserEmail$(userId: string): Observable<string> {
    return this.http.get<string>(
        ROUTES.backend.user.$id(userId).details.email()
    );
}

public getUser$(userId: string): Observable<User> {
    return this.http.get<User>(
        ROUTES.backend.user.$id(userId)()
    );
}`
  ];

  codeIndex = 0;

  goToNextCode = () => {
    console.log("fired");
    this.codeIndex = this.codeIndex < this.codes.length - 1 ? this.codeIndex + 1 : 0;
  }

  goToPrevCode = () => {
    this.codeIndex = this.codeIndex > 0 ? this.codeIndex - 1 : this.codes.length - 1;
  }
}
