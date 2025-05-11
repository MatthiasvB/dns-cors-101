import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyThoughComponent } from './why-though.component';

describe('WhyThoughComponent', () => {
  let component: WhyThoughComponent;
  let fixture: ComponentFixture<WhyThoughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyThoughComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyThoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
