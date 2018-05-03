import {AdminLocationPageComponent} from '../../pages/admin-location-page/admin-location-page.component';
import {AdminCharactersPageComponent} from '../../pages/admin-characters-page/admin-characters-page.component';
import {AdminUsersPageComponent} from '../../pages/admin-users-page/admin-users-page.component';
import {AdminGamePageComponent} from '../../pages/admin-game-page/admin-game-page.component';
import {AdminEpisodePageComponent} from '../../pages/admin-episode-page/admin-episode-page.component';
import {ADMIN_LOCATION_ROUTES} from '../../pages/admin-location-page/routes';

export const ADMIN_ROUTES = [
  { path: '', component: AdminLocationPageComponent},
  { path: 'location', component: AdminLocationPageComponent, children: ADMIN_LOCATION_ROUTES},
  { path: 'characters', component: AdminCharactersPageComponent},
  { path: 'users', component: AdminUsersPageComponent},
  { path: 'dictionaries', component: AdminGamePageComponent},
  { path: 'episodes', component: AdminEpisodePageComponent}
];
