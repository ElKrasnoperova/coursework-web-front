import {Language} from '../../model/Language';
import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../service/language.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.html'
})
export class GameListComponent implements OnInit {
  languages: Language[];
  ngOnInit(): void {
    this.getLanguages();
  }
  constructor(private languageService: LanguageService) { }
  getLanguages() {
    this.languageService.getLanguages()
      .then(items => {
        console.log(items);
        this.languages = items;
      });
  }
}
