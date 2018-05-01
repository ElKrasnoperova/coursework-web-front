import { Component } from '@angular/core';
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
  selector: 'app-games-page',
  template: ' <div class = "app-game-card-location">\n' +
  '        <app-game-card></app-game-card>\n' +
  '      </div>',
  styleUrls: ['components/toolbar/toolbar.component.css']
})

export class GamesPageComponent {}
