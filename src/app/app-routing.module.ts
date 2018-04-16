import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,  Routes} from '@angular/router';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {CharacterPageComponent} from './app.component';
import {MapPageComponent} from './pages/map-page/map-page.component';
import {GAMES_ROUTES} from './components/game-card/routes';
import {GameCardComponent} from './components/game-card/game-card.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {AdminToolbarComponent} from './components/admin-toolbar/admin-toolbar.component';
import {ADMIN_ROUTES} from './components/admin-toolbar/routes';

const routes: Routes = [
  { path: '', component: CharacterPageComponent},
  { path: 'login', component: AuthPageComponent},
  { path: 'characters', component: CharacterPageComponent},
  { path: 'map', component: MapPageComponent},
  { path: 'games', component: GameCardComponent, children: GAMES_ROUTES},
  { path: 'settings', component: SettingsPageComponent},
  { path: 'admin', component: AdminToolbarComponent, children: ADMIN_ROUTES}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
