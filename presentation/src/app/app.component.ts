import { Component } from '@angular/core';
import {NavigationService} from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mathema-presentation';

  public readonly max = this.navigationService.numberOfPages - 1;
  public readonly current$ = this.navigationService.currentPageIndex$;

  constructor(
    private readonly navigationService: NavigationService
  ) {
  }
}
