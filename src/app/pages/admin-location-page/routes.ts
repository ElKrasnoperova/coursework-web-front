import {RouterModule, Routes} from '@angular/router';
import {ChooseEpisodePageComponent} from './choose-episode-page/choose-episode-page.component';
import {ChoosePlacePageComponent} from './choose-place-page/choose-place-page.component';
import {EditLocationPageComponent} from './edit-location-page/edit-location-page.component';

export const ADMIN_LOCATION_ROUTES: Routes = [
  {path: '', redirectTo: 'episode', pathMatch: 'full'},
  {path: 'episode', component: ChooseEpisodePageComponent},
  {path: 'episode/place', component: ChoosePlacePageComponent},
  {path: 'episode/place/location', component: EditLocationPageComponent}
];
