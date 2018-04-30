import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Word} from '../../model/Word';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() word: Word;
  // @Output()
  // translationIsDone: EventEmitter<Word> = new EventEmitter<Word>();
  // answer: string;

  ngOnInit(): void {
    this.word = new Word();
    console.log('in card init');
    console.log(this.word);
  }
  constructor() { }
  // submitAnswer(): void {
  //   // this.word.word = this.answer;
  //   this.translationIsDone.emit(this.word);
  // }
}
