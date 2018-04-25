import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEpisodePageComponent } from './admin-episode-page.component';

describe('AdminEpisodePageComponent', () => {
  let component: AdminEpisodePageComponent;
  let fixture: ComponentFixture<AdminEpisodePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEpisodePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEpisodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
