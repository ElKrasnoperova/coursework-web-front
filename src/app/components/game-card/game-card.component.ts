import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Word} from '../../model/Word';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() word: Word;
  @Output() translationIsDone: EventEmitter<boolean> = new EventEmitter<boolean>();

  answerControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit(): void {
    this.word = new Word();
  }
  constructor() { }

  submitAnswer(): void {
    if (!this.answerControl.hasError('required')) {
      this.translationIsDone.emit(true);
    } else {
      this.translationIsDone.emit(false);
    }
  }
}

