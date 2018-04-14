import {ToolbarComponent} from './toolbar.component';
import {Routes} from '@angular/router';
import {AuthPageComponent} from '../../pages/auth-page/auth-page.component';
import {TranslationGamePageComponent} from '../../pages/translation-game-page/translation-game-page.component';

export const TABS_ROUTES: Routes = [
  {path: 'login', component: AuthPageComponent },
  {path: 'characters', component: ToolbarComponent},
  {path: 'map', component: ToolbarComponent},
  {path: 'games', component: TranslationGamePageComponent},
];
