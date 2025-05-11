import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersRoutesComponent } from './parameters-routes.component';

describe('ParametersRoutesComponent', () => {
  let component: ParametersRoutesComponent;
  let fixture: ComponentFixture<ParametersRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametersRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
