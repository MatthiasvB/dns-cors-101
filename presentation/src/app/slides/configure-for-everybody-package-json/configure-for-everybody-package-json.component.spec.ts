import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureForEverybodyPackageJsonComponent } from './configure-for-everybody-package-json.component';

describe('ConfigureForEverybodyPackageJsonComponent', () => {
  let component: ConfigureForEverybodyPackageJsonComponent;
  let fixture: ComponentFixture<ConfigureForEverybodyPackageJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureForEverybodyPackageJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigureForEverybodyPackageJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
