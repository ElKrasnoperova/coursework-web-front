import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-list-page',
  templateUrl: './answer-list-page.component.html',
  styleUrls: ['./answer-list-page.component.css']
})
export class AnswerListPageComponent implements OnInit {
  displayedColumns = ['inputWord', 'userTranslation', 'rightTranslation'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }


}

export interface Element {
  inputWord: string;
  userTranslation: string;
  rightTranslation: string;
}

const ELEMENT_DATA: Element[] = [
  {inputWord: 'addakhat', userTranslation: 'есть', rightTranslation: 'есть'},
  {inputWord: 'ahesh', userTranslation: 'снег', rightTranslation: 'снег'},
  {inputWord: 'alle', userTranslation: 'звонить', rightTranslation: 'дальше'}
  ];
