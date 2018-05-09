import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {MapPageComponent} from './pages/map-page/map-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {AdminToolbarComponent} from './components/admin-toolbar/admin-toolbar.component';
import {ADMIN_ROUTES} from './components/admin-toolbar/routes';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {GamePageComponent} from './pages/game-page/game-page.component';
import {CharacterPageComponent} from './pages/character-page/character-page.component';
import {Error403PageComponent} from './pages/error-403-page/error-403-page.component';
import {Error500PageComponent} from './pages/error-500-page/error-500-page.component';
import {UserAccess} from './service/url-access-handler/user-access';
import {AdminAccess} from './service/url-access-handler/admin-access';
import {GAME_ROUTES} from './pages/game-page/routes';
import {AnonAccess} from './service/url-access-handler/anon-access';
import {TranslationGamePageComponent} from './pages/game-page/translation-game-page/translation-game-page.component';
import {AnswerListPageComponent} from './pages/game-page/answer-list-page/answer-list-page.component';

const routes: Routes = [
  { path: '',     redirectTo: 'characters', pathMatch: 'full' },
  { path: 'home', redirectTo: 'characters', pathMatch: 'full'},

  {
    path: 'login',
    component: AuthPageComponent,
    canActivate: [ AnonAccess ]
  },
  { path: 'characters',     component: CharacterPageComponent},
  { path: 'characters/:id', component: CharacterPageComponent},
  { path: 'map',            component: MapPageComponent},

  {
    path: 'games',
    component: GamePageComponent,
    // canActivate: [ UserAccess ],
    // children: GAME_ROUTES,
    children: [
        {
          path: ':languageName',
          component: TranslationGamePageComponent,
          // children: [
          //   {
          //     path: 'results',
          //     component: AnswerListPageComponent
          //   }
          // ]
        }
      ]
  },

  {
    path: 'settings',
    component: SettingsPageComponent,
    canActivate: [ UserAccess ]
  },
  {
    path: 'admin',
    component: AdminToolbarComponent,
    children: ADMIN_ROUTES,
    canActivate: [ AdminAccess ],
    canActivateChild: [ AdminAccess ]
  },

  { path: '403', component: Error403PageComponent},
  { path: '500', component: Error500PageComponent},
  { path: '404', component: ErrorPageComponent},
  { path: '**',  component:  ErrorPageComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
