import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticityHowComponent } from './authenticity-how.component';

describe('AuthenticityHowComponent', () => {
  let component: AuthenticityHowComponent;
  let fixture: ComponentFixture<AuthenticityHowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticityHowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticityHowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
