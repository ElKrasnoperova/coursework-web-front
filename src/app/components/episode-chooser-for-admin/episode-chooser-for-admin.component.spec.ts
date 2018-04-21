import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeChooserForAdminComponent } from './episode-chooser-for-admin.component';

describe('EpisodeChooserForAdminComponent', () => {
  let component: EpisodeChooserForAdminComponent;
  let fixture: ComponentFixture<EpisodeChooserForAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeChooserForAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeChooserForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
