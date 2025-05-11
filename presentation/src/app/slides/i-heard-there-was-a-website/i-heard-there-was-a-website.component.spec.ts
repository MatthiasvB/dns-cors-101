import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IHeardThereWasAWebsiteComponent } from './i-heard-there-was-a-website.component';

describe('IHeardThereWasAWebsiteComponent', () => {
  let component: IHeardThereWasAWebsiteComponent;
  let fixture: ComponentFixture<IHeardThereWasAWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IHeardThereWasAWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IHeardThereWasAWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
