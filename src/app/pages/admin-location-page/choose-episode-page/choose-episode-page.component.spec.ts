import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseEpisodePageComponent } from './choose-episode-page.component';

describe('ChooseEpisodePageComponent', () => {
  let component: ChooseEpisodePageComponent;
  let fixture: ComponentFixture<ChooseEpisodePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseEpisodePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseEpisodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
