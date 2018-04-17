import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCharactersPageComponent } from './admin-characters-page.component';

describe('AdminCharactersPageComponent', () => {
  let component: AdminCharactersPageComponent;
  let fixture: ComponentFixture<AdminCharactersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCharactersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
