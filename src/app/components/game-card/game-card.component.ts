import { Component } from '@angular/core';
import {GameCardImages} from '../../game-card-images';
import {GAMES_IMGS} from './mock-cards';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
}

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.html',
  styleUrls: ['./game-card.component.css']
})

export class GamesListComponent {

  games_imgs: GameCardImages[] = GAMES_IMGS;
}
