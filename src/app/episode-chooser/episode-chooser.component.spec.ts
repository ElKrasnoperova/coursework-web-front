import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeChooserComponent } from './episode-chooser.component';

describe('EpisodeChooserComponent', () => {
  let component: EpisodeChooserComponent;
  let fixture: ComponentFixture<EpisodeChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
