import {TranslationGamePageComponent} from '../../pages/translation-game-page/translation-game-page.component';
import {GameListItemComponent} from './game-list-item.component';
import {GameListComponent} from './game-list';

export const GAMES_ROUTES = [
  {path: '', component: GameListComponent, pathMatch: 'full'}, // GameListItemComponent
  {path: ':**', component: TranslationGamePageComponent},
  // {path: 'Дотракийский', component: TranslationGamePageComponent},
  // {path: 'Валирийский', component: TranslationGamePageComponent},
];

// {path: 'dothraky', component: TranslationGamePageComponent},
// {path: 'valirian', component: TranslationGamePageComponent},
