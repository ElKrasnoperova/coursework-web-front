import {Routes} from '@angular/router';
import {SeasonPageComponent} from './season-page/season-page.component';
import {EpisodePageComponent} from './episode-page/episode-page.component';

export const ADMIN_EPISODE_ROUTES: Routes = [
  {path: '', component: SeasonPageComponent},
  {path: 'episodes', component: EpisodePageComponent}
];
