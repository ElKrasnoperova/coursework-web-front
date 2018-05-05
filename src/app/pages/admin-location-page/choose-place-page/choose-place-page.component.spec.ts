import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlacePageComponent } from './choose-place-page.component';

describe('ChoosePlacePageComponent', () => {
  let component: ChoosePlacePageComponent;
  let fixture: ComponentFixture<ChoosePlacePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosePlacePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePlacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
