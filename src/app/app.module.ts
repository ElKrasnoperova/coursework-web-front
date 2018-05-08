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
import { TranslationGamePageComponent } from './pages/game-page/translation-game-page/translation-game-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {CharacterCardComponent} from './components/character-card/character-card.component';
import { AnswerListPageComponent } from './pages/game-page/answer-list-page/answer-list-page.component';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AdminToolbarComponent } from './components/admin-toolbar/admin-toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminCharactersPageComponent } from './pages/admin-characters-page/admin-characters-page.component';
import { AdminUsersPageComponent } from './pages/admin-users-page/admin-users-page.component';
import { HttpClientModule } from '@angular/common/http';

import { CharacterService } from './service/character.service';
import { HttpModule } from '@angular/http';
import { AdminCharactersAddDialogComponent } from './pages/admin-characters-page/admin-characters-add';
import {AdminCharactersEditDialogComponent} from './pages/admin-characters-page/admin-characters-edit';
import {EpisodeService} from './service/episode.service';
import {ConfirmActionDialogComponent} from './components/confirm-action/confirm-action-dialog';
import {PlaceService} from './service/place.service';
import {AdminAddLocationDialogComponent} from './pages/admin-location-page/edit-location-page/add-location-dialog';
import {AdminEditLocationDialogComponent} from './pages/admin-location-page/edit-location-page/edit-location-dialog';

import {AdminService} from './service/admin.service';
import {AdminAddLanguageDialogComponent} from './pages/admin-game-page/languages-page/add-language-dialog';
import {AdminEditLanguageDialogComponent} from './pages/admin-game-page/languages-page/edit-language-dialog';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import {AdminEditPlaceDialogComponent} from './pages/admin-location-page/choose-place-page/edit-place-dialog';
import {LanguageService} from './service/language.service';
import {AdminEditWordDialogComponent} from './pages/admin-game-page/dictionary-page/edit-word-dialog';
import {AdminAddWordDialogComponent} from './pages/admin-game-page/dictionary-page/add-word-dialog';
import {WordService} from './service/word.service';
import {AdminAddEpisodeDialogComponent} from './pages/admin-episode-page/episode-page/add-episode-dialog';
import {AdminAddSeasonDialogComponent} from './pages/admin-episode-page/season-page/add-season-dialog';
import {AdminEditEpisodeDialogComponent} from './pages/admin-episode-page/episode-page/edit-episode-dialog';
import {AdminEditSeasonDialogComponent} from './pages/admin-episode-page/season-page/edit-season-dialog';
import { PhotoLoaderComponent } from './components/photo-loader/photo-loader.component';
import {UserService} from './service/user.service';
import { GameListItemComponent } from './components/game-list-item/game-list-item.component';
import {GameService} from './service/game.service';
import { GamePageComponent } from './pages/game-page/game-page.component';
import {LocationService} from './service/location.service';
import {CharacterPageComponent} from './pages/character-page/character-page.component';
import { PanelForMapComponent } from './components/panel-for-map/panel-for-map.component';
import { ChooseEpisodePageComponent } from './pages/admin-location-page/choose-episode-page/choose-episode-page.component';
import { ChoosePlacePageComponent } from './pages/admin-location-page/choose-place-page/choose-place-page.component';
import { EditLocationPageComponent } from './pages/admin-location-page/edit-location-page/edit-location-page.component';
import {AdminAddPlaceDialogComponent} from './pages/admin-location-page/choose-place-page/add-place-dialog';
import { LanguagesPageComponent } from './pages/admin-game-page/languages-page/languages-page.component';
import { DictionaryPageComponent } from './pages/admin-game-page/dictionary-page/dictionary-page.component';
import { EpisodePageComponent } from './pages/admin-episode-page/episode-page/episode-page.component';
import { SeasonPageComponent } from './pages/admin-episode-page/season-page/season-page.component';
import {DataService} from './service/data.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Error500PageComponent } from './pages/error-500-page/error-500-page.component';
import { Error403PageComponent } from './pages/error-403-page/error-403-page.component';
import {ErrorHandler} from './service/error-handler/error.handler';
import { AdminPhotoPageComponent } from './pages/admin-photo-page/admin-photo-page.component';
import {AdminPhotoAddDialogComponent} from './pages/admin-photo-page/add-photo-dialog';
import {PrincipalService} from './service/principal.service';
import { ToolbarMenuComponent } from './components/toolbar-menu/toolbar-menu.component';
import { ToolbarTabsComponent } from './components/toolbar-tabs/toolbar-tabs.component';
import {StorageServiceModule, WebStorageService} from 'angular-webstorage-service';
import {UserAccess} from './service/url-access-handler/user-access';
import {AdminAccess} from './service/url-access-handler/admin-access';
import {AnonAccess} from './service/url-access-handler/anon-access';
import {PhotoService} from './service/photo.service';
import {PreviewPhotoDialogComponent} from './pages/admin-photo-page/preview-photo-dialog.component';


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
  MatSlideToggleModule,
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
    GameCardComponent,
    CharacterCardComponent,
    AnswerListPageComponent,
    GamesPageComponent,
    SettingsPageComponent,
    ConfirmActionDialogComponent,
    AdminToolbarComponent,
    AdminCharactersPageComponent,
    AdminUsersPageComponent,
    AdminCharactersAddDialogComponent,
    AdminCharactersEditDialogComponent,
    AdminAddLocationDialogComponent,
    AdminEditLocationDialogComponent,
    AdminAddLanguageDialogComponent,
    AdminEditLanguageDialogComponent,
    AdminAddWordDialogComponent,
    AdminEditWordDialogComponent,
    ErrorPageComponent,
    AdminAddPlaceDialogComponent,
    AdminEditPlaceDialogComponent,
    AdminAddEpisodeDialogComponent,
    AdminAddSeasonDialogComponent,
    AdminEditEpisodeDialogComponent,
    AdminEditSeasonDialogComponent,
    PhotoLoaderComponent,
    GameListItemComponent,
    GamePageComponent,
    CharacterPageComponent,
    PanelForMapComponent,
    ChooseEpisodePageComponent,
    ChoosePlacePageComponent,
    EditLocationPageComponent,
    LanguagesPageComponent,
    DictionaryPageComponent,
    EpisodePageComponent,
    SeasonPageComponent,
    Error500PageComponent,
    Error403PageComponent,
    AdminPhotoPageComponent,
    ToolbarMenuComponent,
    ToolbarTabsComponent,
    PreviewPhotoDialogComponent,
    AdminPhotoAddDialogComponent
  ],
  entryComponents: [
    ConfirmActionDialogComponent,
    AdminCharactersAddDialogComponent,
    AdminCharactersEditDialogComponent,
    AdminAddLocationDialogComponent,
    AdminEditLocationDialogComponent,
    AdminAddLanguageDialogComponent,
    AdminEditLanguageDialogComponent,
    AdminAddWordDialogComponent,
    AdminEditWordDialogComponent,
    AdminAddPlaceDialogComponent,
    AdminEditPlaceDialogComponent,
    AdminAddEpisodeDialogComponent,
    AdminAddSeasonDialogComponent,
    AdminEditEpisodeDialogComponent,
    AdminEditSeasonDialogComponent,
    AdminPhotoAddDialogComponent,
    PreviewPhotoDialogComponent
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
    StorageServiceModule,
    // WebStorageService,          //
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
    GameService,
    DataService,
    ErrorHandler,
    PrincipalService,
    PhotoService,
    BrowserModule,
    StorageServiceModule,
    // WebStorageService,
    UserAccess,
    AdminAccess,
    AnonAccess
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
