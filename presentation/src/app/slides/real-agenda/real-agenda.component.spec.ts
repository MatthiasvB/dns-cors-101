import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealAgendaComponent } from './real-agenda.component';

describe('RealAgendaComponent', () => {
  let component: RealAgendaComponent;
  let fixture: ComponentFixture<RealAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
