import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameTakenComponent } from './name-taken.component';

describe('NameTakenComponent', () => {
  let component: NameTakenComponent;
  let fixture: ComponentFixture<NameTakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameTakenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
