import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {MapPageComponent} from './pages/map-page/map-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {AdminToolbarComponent} from './components/admin-toolbar/admin-toolbar.component';
import {ADMIN_ROUTES} from './components/admin-toolbar/routes';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {GAMES_ROUTES} from './components/game-list-item/routes';
import {GamePageComponent} from './pages/game-page/game-page.component';
import {CharacterPageComponent} from './pages/character-page/character-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'characters/1', pathMatch: 'full'},
  {path: 'login', component: AuthPageComponent},
  {path: 'characters/:id', component: CharacterPageComponent},
  {path: 'characters', redirectTo: 'characters/1'},
  {path: 'map', component: MapPageComponent},
  {path: 'games', component: GamePageComponent, children: GAMES_ROUTES},
  {path: 'settings', component: SettingsPageComponent},
  {path: 'admin', component: AdminToolbarComponent, children: ADMIN_ROUTES},
  {path: '**', component: ErrorPageComponent}
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
