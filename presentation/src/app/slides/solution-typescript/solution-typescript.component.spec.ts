import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTypescriptComponent } from './solution-typescript.component';

describe('SolutionTypescriptComponent', () => {
  let component: SolutionTypescriptComponent;
  let fixture: ComponentFixture<SolutionTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionTypescriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
