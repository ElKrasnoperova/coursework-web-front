import {AdminLocationPageComponent} from '../../pages/admin-location-page/admin-location-page.component';
import {AdminCharactersPageComponent} from '../../pages/admin-characters-page/admin-characters-page.component';
import {AdminUsersPageComponent} from '../../pages/admin-users-page/admin-users-page.component';
import {AdminGamePageComponent} from '../../pages/admin-game-page/admin-game-page.component';
import {AdminEpisodePageComponent} from '../../pages/admin-episode-page/admin-episode-page.component';

export const ADMIN_ROUTES = [
  { path: '', component: AdminLocationPageComponent},
  { path: 'location', component: AdminLocationPageComponent},
  { path: 'characters', component: AdminCharactersPageComponent},
  { path: 'users', component: AdminUsersPageComponent},
  { path: 'dictionaries', component: AdminGamePageComponent},
  { path: 'episodes', component: AdminEpisodePageComponent}
];
