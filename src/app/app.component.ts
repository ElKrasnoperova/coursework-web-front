import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor( private http: HttpClient ) {}
}

@Component({
  selector: 'app-character-page',
  template: '' +
  '      <div class="container-for-character">\n' +
  '        <app-character-card></app-character-card>\n' +
  '        <div class = "up-down-buttons">\n' +
  '          <div class = "button-column">\n' +
  '            <button mat-fab color="primary">\n' +
  '              <mat-icon>keyboard_arrow_up</mat-icon>\n' +
  '            </button>\n' +
  '            </div>\n' +
  '          <div class = "button-column">\n' +
  '            <button mat-fab color="primary">\n' +
  '              <mat-icon>keyboard_arrow_down</mat-icon>\n' +
  '            </button>\n' +
  '            </div>\n' +
  '      </div>',
  styleUrls: ['components/toolbar/toolbar.component.css']
})
export class CharacterPageComponent {}

@Component({
  selector: 'app-games-page',
  template: ' <div class = "app-game-card-location">\n' +
  '        <app-game-card></app-game-card>\n' +
  '      </div>',
  styleUrls: ['components/toolbar/toolbar.component.css']
})

export class GamesPageComponent {}
