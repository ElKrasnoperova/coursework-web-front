import {ToolbarComponent} from './toolbar.component';
import {Routes} from '@angular/router';
import {AuthPageComponent} from '../auth-page/auth-page.component';
import {TranslationGamePageComponent} from '../translation-game-page/translation-game-page.component';

export const TABS_ROUTES: Routes = [
  {path: 'login', component: AuthPageComponent },
  {path: 'characters', component: ToolbarComponent},
  {path: 'map', component: ToolbarComponent},
  {path: 'games', component: TranslationGamePageComponent},
];
