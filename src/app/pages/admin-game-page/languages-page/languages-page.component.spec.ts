import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesPageComponent } from './languages-page.component';

describe('LanguagesPageComponent', () => {
  let component: LanguagesPageComponent;
  let fixture: ComponentFixture<LanguagesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
