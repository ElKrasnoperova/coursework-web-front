import {RouterModule, Routes} from '@angular/router';
import {ChooseEpisodePageComponent} from './choose-episode-page/choose-episode-page.component';
import {ChoosePlacePageComponent} from './choose-place-page/choose-place-page.component';
import {EditLocationPageComponent} from './edit-location-page/edit-location-page.component';

export const ADMIN_LOCATION_ROUTES: Routes = [
  {path: '', redirectTo: 'episodes', pathMatch: 'full'},
  {path: 'episodes', component: ChooseEpisodePageComponent},
  {path: 'episodes/places', component: ChoosePlacePageComponent},
  {path: 'episodes/places/locations', component: EditLocationPageComponent}
];
