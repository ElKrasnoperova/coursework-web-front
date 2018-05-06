import {Component, OnInit} from '@angular/core';
import {Word} from '../../../model/Word';
import {GameService} from '../../../service/game.service';
import {Language} from '../../../model/Language';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguageService} from '../../../service/language.service';
import {DataService} from '../../../service/data.service';

@Component({
  selector: 'app-translation-game-page',
  templateUrl: './translation-game-page.component.html',
  styleUrls: ['./translation-game-page.component.css']
})
export class TranslationGamePageComponent implements OnInit {

  language: Language;
  languageName: string;

  words: Word[];
  word: Word;

  index: number;
  lastIndex: number;

  answer = false;
  answerRequiredError = false;

  progressBarValue = 0;


  constructor(private gameService: GameService,
              private languageService: LanguageService,
              private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
    this.languageName = route.snapshot.params['**'];
  }

  ngOnInit() {
    if (this.language == null ) {
      this.initLanguage();
    } else {
      this.getWords();
    }
  }
  getLanguageByName(languageName: string): void {
    this.languageService.getLanguage(languageName)
      .then(result => {
        this.language = result;
        this.getWords();
      })
      .catch(() => this.router.navigate(['/notFound']));
  }
  initLanguage(): void {
    const languageName = this.route.snapshot.paramMap.get('languageName');
    if (languageName !== '') {
      this.getLanguageByName(languageName);
    }
  }
  getWords(): void {
    this.gameService.getWords(this.language.id)
      .then(items => {
        this.words = items;
        this.index = 0;
        this.word = this.words[0];
        this.lastIndex  = this.words.length - 1;
      });
  }
  nextWord() {
    if (!this.answer) {
      this.answerRequiredError = true;
      return;
    }
    if (this.index < this.lastIndex) {
      this.index++;
      this.word = this.words[this.index];
      this.answer = false;
      this.progressBarValue += 20;
      console.log(this.progressBarValue);
    } else {
      this.getResults();
    }
  }

  setAnswer(answer: boolean) {
    this.answer = answer;
    if (answer) { this.answerRequiredError = false; }
  }

  getResults(): void {
    this.gameService.getResult(this.words)
      .then(items => {
        this.dataService.answers = this.words;
        this.dataService.results = items;
        console.log('go to results' + this.language.name);
        this.router.navigate([`/games/${this.language.name}/results`]);
      });
  }
}
