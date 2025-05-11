import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoWeWantToDealWithThatComponent } from './do-we-want-to-deal-with-that.component';

describe('DoWeWantToDealWithThatComponent', () => {
  let component: DoWeWantToDealWithThatComponent;
  let fixture: ComponentFixture<DoWeWantToDealWithThatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoWeWantToDealWithThatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoWeWantToDealWithThatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
