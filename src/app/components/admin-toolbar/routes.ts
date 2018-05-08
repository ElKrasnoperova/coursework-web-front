import {AdminCharactersPageComponent} from '../../pages/admin-characters-page/admin-characters-page.component';
import {AdminUsersPageComponent} from '../../pages/admin-users-page/admin-users-page.component';
import {ADMIN_LOCATION_ROUTES} from '../../pages/admin-location-page/routes';
import {ADMIN_GAME_ROUTES} from '../../pages/admin-game-page/routes';
import {ADMIN_EPISODE_ROUTES} from '../../pages/admin-episode-page/routes';
import {AdminPhotoPageComponent} from '../../pages/admin-photo-page/admin-photo-page.component';

export const ADMIN_ROUTES = [
  { path: '', redirectTo: 'characters', pathMatch: 'full'},

  { path: 'character_locations',  children:  ADMIN_LOCATION_ROUTES},
  { path: 'characters',           component: AdminCharactersPageComponent},
  { path: 'users',                component: AdminUsersPageComponent},
  { path: 'languages',            children:  ADMIN_GAME_ROUTES},
  { path: 'seasons',              children:  ADMIN_EPISODE_ROUTES},
  { path: 'photos',               component: AdminPhotoPageComponent},
];
