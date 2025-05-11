import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteTestsComponent } from './write-tests.component';

describe('WriteTestsComponent', () => {
  let component: WriteTestsComponent;
  let fixture: ComponentFixture<WriteTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
