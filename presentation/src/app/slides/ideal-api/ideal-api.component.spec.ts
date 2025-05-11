import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealApiComponent } from './ideal-api.component';

describe('IdealApiComponent', () => {
  let component: IdealApiComponent;
  let fixture: ComponentFixture<IdealApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdealApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdealApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
