import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule,
  MatFormFieldModule, MatTooltipModule, MatDialogModule, MatStepperModule, MatListModule
} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { AppComponent, GamesPageComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EpisodeChooserComponent } from './components/episode-chooser/episode-chooser.component';
import { CardForMapComponent } from './components/card-for-map/card-for-map.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { TranslationGamePageComponent } from './pages/translation-game-page/translation-game-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { YearChooserComponent } from './components/year-chooser/year-chooser.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {CharacterCardComponent} from './components/character-card/character-card.component';
import { AnswerListPageComponent } from './pages/answer-list-page/answer-list-page.component';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './components/map/map.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AdminLocationPageComponent } from './pages/admin-location-page/admin-location-page.component';
import { LocationOfCharacterComponent } from './components/location-of-character/location-of-character.component';
import { AdminToolbarComponent } from './components/admin-toolbar/admin-toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminCharactersPageComponent } from './pages/admin-characters-page/admin-characters-page.component';
import { AdminUsersPageComponent } from './pages/admin-users-page/admin-users-page.component';
import { AdminGamePageComponent } from './pages/admin-game-page/admin-game-page.component';
import { HttpClientModule } from '@angular/common/http';

import { CharacterService } from './service/character.service';
import { HttpModule } from '@angular/http';
import { AdminCharactersAddDialogComponent } from './pages/admin-characters-page/admin-characters-add';
import {AdminCharactersEditDialogComponent} from './pages/admin-characters-page/admin-characters-edit';
import {EpisodeService} from './service/episode.service';
import {ConfirmActionDialogComponent} from './components/confirm-action/confirm-action-dialog';
import {PlaceService} from './service/place.service';
import {AdminAddLocationDialogComponent} from './pages/admin-location-page/add-location-dialog';
import {AdminEditLocationDialogComponent} from './pages/admin-location-page/edit-location-dialog';
import {AdminDeleteLocationDialogComponent} from './pages/admin-location-page/delete-location-dialog';

import {AdminService} from './service/admin.service';
import {AdminAddLanguageDialogComponent} from './pages/admin-game-page/add-language-dialog';
import {AdminEditLanguageDialogComponent} from './pages/admin-game-page/edit-language-dialog';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import {ConfirmExitDialogComponent} from './components/toolbar/confirmation-dialog';
import {AdminAddPlaceDialogComponent} from './pages/admin-location-page/add-place-dialog';
import {AdminEditPlaceDialogComponent} from './pages/admin-location-page/edit-place-dialog';
import {LanguageService} from './service/language.service';
import {AdminEditWordDialogComponent} from './pages/admin-game-page/edit-word-dialog';
import {AdminAddWordDialogComponent} from './pages/admin-game-page/add-word-dialog';
import {WordService} from './service/word.service';
import {AdminEpisodePageComponent} from './pages/admin-episode-page/admin-episode-page.component';
import {AdminAddEpisodeDialogComponent} from './pages/admin-episode-page/add-episode-dialog';
import {AdminAddSeasonDialogComponent} from './pages/admin-episode-page/add-season-dialog';
import {AdminEditEpisodeDialogComponent} from './pages/admin-episode-page/edit-episode-dialog';
import {AdminEditSeasonDialogComponent} from './pages/admin-episode-page/edit-season-dialog';
import { PhotoLoaderComponent } from './components/photo-loader/photo-loader.component';
import {UserService} from './service/user.service';
import { GameListItemComponent } from './components/game-list-item/game-list-item.component';
import {GameService} from './service/game.service';
import { GamePageComponent } from './pages/game-page/game-page.component';
import {GameListComponent} from './components/game-list-item/game-list';
import {LocationService} from './service/location.service';
import {CharacterPageComponent} from './pages/character-page/character-page.component';


const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatSelectModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatGridListModule,
  MatTableModule,
  MatDialogModule,
  MatStepperModule,
  MatListModule,
];
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    EpisodeChooserComponent,
    CardForMapComponent,
    AuthPageComponent,
    SignInFormComponent,
    SignUpFormComponent,
    TranslationGamePageComponent,
    MapPageComponent,
    YearChooserComponent,
    GameCardComponent,
    CharacterCardComponent,
    AnswerListPageComponent,
    GamesPageComponent,
    MapComponent,
    SettingsPageComponent,
    ConfirmActionDialogComponent,
    AdminLocationPageComponent,
    LocationOfCharacterComponent,
    AdminToolbarComponent,
    AdminCharactersPageComponent,
    AdminUsersPageComponent,
    AdminGamePageComponent,
    AdminCharactersAddDialogComponent,
    AdminCharactersEditDialogComponent,
    AdminAddLocationDialogComponent,
    AdminEditLocationDialogComponent,
    AdminDeleteLocationDialogComponent,
    AdminAddLanguageDialogComponent,
    AdminEditLanguageDialogComponent,
    AdminAddWordDialogComponent,
    AdminEditWordDialogComponent,
    ErrorPageComponent,
    ConfirmExitDialogComponent,
    AdminAddPlaceDialogComponent,
    AdminEditPlaceDialogComponent,
    AdminEpisodePageComponent,
    AdminAddEpisodeDialogComponent,
    AdminAddSeasonDialogComponent,
    AdminEditEpisodeDialogComponent,
    AdminEditSeasonDialogComponent,
    PhotoLoaderComponent,
    GameListItemComponent,
    GamePageComponent,
    GameListComponent,
    CharacterPageComponent
  ],
  entryComponents: [
    ConfirmActionDialogComponent,
    AdminCharactersAddDialogComponent,
    AdminCharactersEditDialogComponent,
    AdminAddLocationDialogComponent,
    AdminEditLocationDialogComponent,
    AdminDeleteLocationDialogComponent,
    AdminAddLanguageDialogComponent,
    AdminEditLanguageDialogComponent,
    AdminAddWordDialogComponent,
    AdminEditWordDialogComponent,
    ConfirmExitDialogComponent,
    AdminAddPlaceDialogComponent,
    AdminEditPlaceDialogComponent,
    AdminAddEpisodeDialogComponent,
    AdminAddSeasonDialogComponent,
    AdminEditEpisodeDialogComponent,
    AdminEditSeasonDialogComponent
  ],
  imports: [
    MatTabsModule,
    materialModules,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SlideshowModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    CharacterService,
    EpisodeService,
    PlaceService,
    LocationService,
    AdminService,
    UserService,
    LanguageService,
    WordService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
