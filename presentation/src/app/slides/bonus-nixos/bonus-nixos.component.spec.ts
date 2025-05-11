import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusNixosComponent } from './bonus-nixos.component';

describe('BonusNixosComponent', () => {
  let component: BonusNixosComponent;
  let fixture: ComponentFixture<BonusNixosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusNixosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusNixosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
