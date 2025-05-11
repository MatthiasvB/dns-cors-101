import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoWeWantThatComponent } from './do-we-want-that.component';

describe('DoWeWantThatComponent', () => {
  let component: DoWeWantThatComponent;
  let fixture: ComponentFixture<DoWeWantThatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoWeWantThatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoWeWantThatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
