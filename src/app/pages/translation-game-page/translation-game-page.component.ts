import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Word} from '../../model/Word';
import {GameService} from '../../service/game.service';
import {Language} from '../../model/Language';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GameCardComponent} from '../../components/game-card/game-card.component';

@Component({
  selector: 'app-translation-game-page',
  templateUrl: './translation-game-page.component.html',
  styleUrls: ['./translation-game-page.component.css']
})
export class TranslationGamePageComponent implements OnInit {
  // @Output() word: Word;
  // answerIsReady: EventEmitter<Word> = new EventEmitter<Word>();
  // @Input() language: Language;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  count: number;
  words: Word[];
  results: Boolean[];

  languageName: string;

  @ViewChild(GameCardComponent) gameCard: ElementRef;
  @ViewChild('nextButton') nextButton: ElementRef;
  @ContentChild(GameCardComponent) card2: ElementRef

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private _formBuilder: FormBuilder) {
    this.languageName = route.snapshot.params['**'];
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  getWords(languageName: string): void {
    this.gameService.getWords(languageName)
      .then(items => {
        console.log(items);
        this.words = items;
        this.count = items.length;
        console.log('card-component:');
        console.log(this.gameCard);
        // this.gameCard.nativeElement.setAttribute('word', this.words[0]);
      });
  }

  startGame() {
    this.getWords(this.languageName);
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
