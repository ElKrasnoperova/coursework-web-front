import { Component, OnInit } from '@angular/core';
import {Language} from '../../model/Language';
import {LanguageService} from '../../service/language.service';
import {ErrorHandler} from '../../service/error-handler/error.handler';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  languages: Language[];

  ngOnInit(): void {
    this.getLanguages();
  }
  constructor(private languageService: LanguageService,
              private errorHandler: ErrorHandler) { }
  getLanguages() {
    this.languageService.getLanguages()
      .then(items => {
        this.languages = items;
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }
}

