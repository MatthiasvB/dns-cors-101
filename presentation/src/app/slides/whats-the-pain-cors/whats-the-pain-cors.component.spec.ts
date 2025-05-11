import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsThePainCorsComponent } from './whats-the-pain-cors.component';

describe('WhatsThePainCorsComponent', () => {
  let component: WhatsThePainCorsComponent;
  let fixture: ComponentFixture<WhatsThePainCorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsThePainCorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsThePainCorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
