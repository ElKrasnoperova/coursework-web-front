import { Component, OnInit } from '@angular/core';
import {Language} from '../../model/Language';
import {LanguageService} from '../../service/language.service';

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
  constructor(private languageService: LanguageService) { }
  getLanguages() {
    this.languageService.getLanguages()
      .then(items => {
        console.log(items);
        this.languages = items;
      });
  }
}

