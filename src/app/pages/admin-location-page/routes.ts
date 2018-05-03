import {RouterModule, Routes} from '@angular/router';
import {ChooseEpisodePageComponent} from './choose-episode-page/choose-episode-page.component';
import {ChoosePlacePageComponent} from './choose-place-page/choose-place-page.component';
import {EditLocationPageComponent} from './edit-location-page/edit-location-page.component';

export const ADMIN_LOCATION_ROUTES: Routes = [
  {path: '', component: ChooseEpisodePageComponent},
  {path: '1', component: ChooseEpisodePageComponent},
  {path: '2', component: ChoosePlacePageComponent},
  {path: '3', component: EditLocationPageComponent}
];
