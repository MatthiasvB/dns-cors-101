import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTheSolutionCorsComponent } from './see-the-solution-cors.component';

describe('SeeTheSolutionCorsComponent', () => {
  let component: SeeTheSolutionCorsComponent;
  let fixture: ComponentFixture<SeeTheSolutionCorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeTheSolutionCorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeTheSolutionCorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
