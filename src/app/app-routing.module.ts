import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,  Routes} from '@angular/router';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {TABS_ROUTES} from './components/toolbar/routes';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {CharacterPageComponent, GamesPageComponent} from './app.component';
import {MapPageComponent} from './pages/map-page/map-page.component';

const routes: Routes = [
  { path: '', component: ToolbarComponent},
  { path: 'login', component: AuthPageComponent},
  { path: 'characters', component: CharacterPageComponent},
  { path: 'map', component: MapPageComponent},
  { path: 'games', component: GamesPageComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
