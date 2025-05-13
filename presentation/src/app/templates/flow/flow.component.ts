import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent {
  @Input() items: string[] = [];
  @Input() size: 'compact' | 'normal' = 'normal';
  @Input() customStyles: { [key: number]: string } = {};

  getBoxStyle(index: number): { [key: string]: string } {
    if (this.customStyles[index]) {
      return { background: this.customStyles[index] };
    }
    return {};
  }
}
