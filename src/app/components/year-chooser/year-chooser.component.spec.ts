import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearChooserComponent } from './year-chooser.component';

describe('YearChooserComponent', () => {
  let component: YearChooserComponent;
  let fixture: ComponentFixture<YearChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
