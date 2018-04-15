import {TranslationGamePageComponent} from '../../pages/translation-game-page/translation-game-page.component';
import { GamesListComponent} from './game-card.component';

export const GAMES_ROUTES = [
  {path: '', component: GamesListComponent},
  {path: 'dothraky', component: TranslationGamePageComponent},
  {path: 'valirian', component: TranslationGamePageComponent}
];
