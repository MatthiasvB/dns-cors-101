import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemToSolveComponent } from './problem-to-solve.component';

describe('ProblemToSolveComponent', () => {
  let component: ProblemToSolveComponent;
  let fixture: ComponentFixture<ProblemToSolveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemToSolveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemToSolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
