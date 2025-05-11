import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeThePainCorsComponent } from './see-the-pain-cors.component';

describe('SeeThePainCorsComponent', () => {
  let component: SeeThePainCorsComponent;
  let fixture: ComponentFixture<SeeThePainCorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeThePainCorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeThePainCorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
