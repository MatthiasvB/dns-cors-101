import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {addClassToElementForTime} from '../../shared/utils';

@Component({
  selector: 'app-prev-next-buttons',
  templateUrl: './prev-next-buttons.component.html',
  styleUrls: ['./prev-next-buttons.component.scss']
})
export class PrevNextButtonsComponent implements OnDestroy {

  @ViewChild('prevButton')
  prevButton!: ElementRef<HTMLButtonElement>

  @ViewChild('nextButton')
  nextButton!: ElementRef<HTMLButtonElement>

  @Output()
  readonly next = new EventEmitter<void>();

  @Output()
  readonly prev = new EventEmitter<void>();

  constructor() {
    console.log("constucting");
    window.addEventListener("keydown", this.navListener.bind(this));
  }

  navListener(event: KeyboardEvent) {
    console.log("fired");
    switch (event.key) {
      case "n":
        this.onNext();
        break;
      case "p":
        this.onPrev();
        break;
    }
  }

  onPrev() {
    addClassToElementForTime(this.prevButton, "button__clicked", 200);
    this.prev.emit();
  }

  onNext() {
    addClassToElementForTime(this.nextButton, "button__clicked", 200);
    this.next.emit();
  }

  ngOnDestroy() {
    window.removeEventListener("keydown", this.navListener);
  }
}
