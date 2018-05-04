import {Routes} from '@angular/router';
import {LanguagesPageComponent} from './languages-page/languages-page.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';

export const ADMIN_GAME_ROUTES: Routes = [
  {path: '', component: LanguagesPageComponent},
  {path: 'language', component: LanguagesPageComponent},
  {path: 'language/dictionary', component: DictionaryPageComponent}
  ];
