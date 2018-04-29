import {TranslationGamePageComponent} from '../../pages/translation-game-page/translation-game-page.component';
import {GamePageComponent} from '../../pages/game-page/game-page.component';
import {GameListItemComponent} from './game-list-item.component';

export const GAMES_ROUTES = [
  {path: '', component: GameListItemComponent},
  {path: 'dothraky', component: TranslationGamePageComponent},
  {path: 'valirian', component: TranslationGamePageComponent}
];
