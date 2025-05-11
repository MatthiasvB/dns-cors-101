import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeThePainComponent } from './see-the-pain.component';

describe('SeeThePainComponent', () => {
  let component: SeeThePainComponent;
  let fixture: ComponentFixture<SeeThePainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeThePainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeThePainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
