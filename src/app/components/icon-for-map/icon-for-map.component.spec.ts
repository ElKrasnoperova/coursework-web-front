import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconForMapComponent } from './icon-for-map.component';

describe('IconForMapComponent', () => {
  let component: IconForMapComponent;
  let fixture: ComponentFixture<IconForMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconForMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconForMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
