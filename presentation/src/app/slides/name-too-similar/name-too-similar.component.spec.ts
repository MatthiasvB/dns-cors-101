import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameTooSimilarComponent } from './name-too-similar.component';

describe('NameTooSimilarComponent', () => {
  let component: NameTooSimilarComponent;
  let fixture: ComponentFixture<NameTooSimilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameTooSimilarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameTooSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
