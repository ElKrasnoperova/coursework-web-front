import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Word} from '../../model/Word';
import {GameService} from '../../service/game.service';

@Component({
  selector: 'app-translation-game-page',
  templateUrl: './translation-game-page.component.html',
  styleUrls: ['./translation-game-page.component.css']
})
export class TranslationGamePageComponent implements OnInit {
  // @Output() word: Word;
  // answerIsReady: EventEmitter<Word> = new EventEmitter<Word>();
  count: number;
  words: Word[];
  results: Boolean[];

  @ViewChild('gameCard') gameCard: ElementRef;
  @ViewChild('nextButton') nextButton: ElementRef;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getWords();
  }

  getWords(): void {
    this.gameService.getWords()
      .then(items => {
        this.words = items;
        this.count = items.length;
      });
  }

  getResults(): void {
    this.gameService.getResult(this.words)
      .then(items => {
        this.results = items;
      });
  }

  // saveAnswer(word: Word): void {
  //   this.word = word;
  // }

  next(): void {
    // this.answerIsReady.emit(this.word);
    if (this.count > 0) {
      this.count--;
      this.gameCard.nativeElement.setAttribute('word', this.words[this.count]);
    } else {
      // getresults
    }
  }
}
