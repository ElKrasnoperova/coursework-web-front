import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForMapComponent } from './card-for-map.component';

describe('CardForMapComponent', () => {
  let component: CardForMapComponent;
  let fixture: ComponentFixture<CardForMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardForMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardForMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
