import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationOfCharacterComponent } from './location-of-character.component';

describe('LocationOfCharacterComponent', () => {
  let component: LocationOfCharacterComponent;
  let fixture: ComponentFixture<LocationOfCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationOfCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationOfCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
