import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationGamePageComponent } from './translation-game-page.component';

describe('TranslationGamePageComponent', () => {
  let component: TranslationGamePageComponent;
  let fixture: ComponentFixture<TranslationGamePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationGamePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
