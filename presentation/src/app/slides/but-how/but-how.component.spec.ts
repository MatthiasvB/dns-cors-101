import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButHowComponent } from './but-how.component';

describe('ButHowComponent', () => {
  let component: ButHowComponent;
  let fixture: ComponentFixture<ButHowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButHowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButHowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
