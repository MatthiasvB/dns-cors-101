import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsThePainTlsComponent } from './whats-the-pain-tls.component';

describe('WhatsThePainTlsComponent', () => {
  let component: WhatsThePainTlsComponent;
  let fixture: ComponentFixture<WhatsThePainTlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsThePainTlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsThePainTlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
