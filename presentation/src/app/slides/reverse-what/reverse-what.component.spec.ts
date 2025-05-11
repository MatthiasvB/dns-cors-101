import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseWhatComponent } from './reverse-what.component';

describe('ReverseWhatComponent', () => {
  let component: ReverseWhatComponent;
  let fixture: ComponentFixture<ReverseWhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseWhatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
