import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTabsComponent } from './toolbar-tabs.component';

describe('ToolbarTabsComponent', () => {
  let component: ToolbarTabsComponent;
  let fixture: ComponentFixture<ToolbarTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
