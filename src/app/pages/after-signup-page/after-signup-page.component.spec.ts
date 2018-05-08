import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSignupPageComponent } from './after-signup-page.component';

describe('AfterSignupPageComponent', () => {
  let component: AfterSignupPageComponent;
  let fixture: ComponentFixture<AfterSignupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterSignupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
