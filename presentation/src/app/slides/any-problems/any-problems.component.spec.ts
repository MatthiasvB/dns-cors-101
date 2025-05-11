import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyProblemsComponent } from './any-problems.component';

describe('AnyProblemsComponent', () => {
  let component: AnyProblemsComponent;
  let fixture: ComponentFixture<AnyProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyProblemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnyProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
