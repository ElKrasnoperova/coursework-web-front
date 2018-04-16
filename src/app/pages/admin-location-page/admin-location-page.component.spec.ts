import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLocationPageComponent } from './admin-location-page.component';

describe('AdminLocationPageComponent', () => {
  let component: AdminLocationPageComponent;
  let fixture: ComponentFixture<AdminLocationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLocationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLocationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
