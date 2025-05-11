import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoWeHaveToComponent } from './do-we-have-to.component';

describe('DoWeHaveToComponent', () => {
  let component: DoWeHaveToComponent;
  let fixture: ComponentFixture<DoWeHaveToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoWeHaveToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoWeHaveToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
