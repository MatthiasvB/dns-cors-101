import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslVsTlsComponent } from './ssl-vs-tls.component';

describe('SslVsTlsComponent', () => {
  let component: SslVsTlsComponent;
  let fixture: ComponentFixture<SslVsTlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslVsTlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SslVsTlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
