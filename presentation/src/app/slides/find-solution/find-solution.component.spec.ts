import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSolutionComponent } from './find-solution.component';

describe('FindSolutionComponent', () => {
  let component: FindSolutionComponent;
  let fixture: ComponentFixture<FindSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
