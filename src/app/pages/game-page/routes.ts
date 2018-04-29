import {TranslationGamePageComponent} from '../../pages/translation-game-page/translation-game-page.component';
import {GamePageComponent} from './game-page.component';

export const GAMES_ROUTES = [
  {path: '', component: GamePageComponent},
  {path: 'dothraky', component: TranslationGamePageComponent},
  {path: 'valirian', component: TranslationGamePageComponent}
];
