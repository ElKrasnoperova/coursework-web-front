import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerListPageComponent } from './answer-list-page.component';

describe('AnswerListPageComponent', () => {
  let component: AnswerListPageComponent;
  let fixture: ComponentFixture<AnswerListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
