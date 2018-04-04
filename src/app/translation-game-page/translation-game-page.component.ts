import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translation-game-page',
  templateUrl: './translation-game-page.component.html',
  styleUrls: ['./translation-game-page.component.css']
})
export class TranslationGamePageComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  constructor() { }

  ngOnInit() {
  }

}
