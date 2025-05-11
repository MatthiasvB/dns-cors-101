import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedCertificatesComponent } from './trusted-certificates.component';

describe('TrustedCertificatesComponent', () => {
  let component: TrustedCertificatesComponent;
  let fixture: ComponentFixture<TrustedCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
