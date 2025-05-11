import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeThePainTlsComponent } from './see-the-pain-tls.component';

describe('SeeThePainTlsComponent', () => {
  let component: SeeThePainTlsComponent;
  let fixture: ComponentFixture<SeeThePainTlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeThePainTlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeThePainTlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
