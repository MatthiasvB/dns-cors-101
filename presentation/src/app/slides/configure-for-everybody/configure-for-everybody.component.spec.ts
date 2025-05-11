import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureForEverybodyComponent } from './configure-for-everybody.component';

describe('ConfigureForEverybodyComponent', () => {
  let component: ConfigureForEverybodyComponent;
  let fixture: ComponentFixture<ConfigureForEverybodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureForEverybodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigureForEverybodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
