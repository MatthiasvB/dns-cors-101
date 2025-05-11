import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent {

  @Input()
  current: number | null = 0

  @Input()
  set max(max: number) {
    this.values = [];
    for (let i = 0; i <= max; i++) {
      this.values.push(undefined);
    }
  }

  values: undefined[] = [];

  constructor() { }

}
