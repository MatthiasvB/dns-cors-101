import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCodeComponent } from './library-code.component';

describe('LibraryCodeComponent', () => {
  let component: LibraryCodeComponent;
  let fixture: ComponentFixture<LibraryCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
