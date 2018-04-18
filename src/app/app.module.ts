import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule,
  MatFormFieldModule, MatTooltipModule, MatDialogModule, MatStepperModule, MatListModule
} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {AppComponent, CharacterPageComponent, GamesPageComponent} from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EpisodeChooserComponent } from './components/episode-chooser/episode-chooser.component';
import { CardForMapComponent } from './components/card-for-map/card-for-map.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { TranslationGamePageComponent } from './pages/translation-game-page/translation-game-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { YearChooserComponent } from './components/year-chooser/year-chooser.component';
import {GameCardComponent, GamesListComponent} from './components/game-card/game-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {CharacterCardComponent} from './components/character-card/character-card.component';
import { AnswerListPageComponent } from './pages/answer-list-page/answer-list-page.component';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './components/map/map.component';
import {DialogOverviewExampleDialogComponent, SettingsPageComponent} from './pages/settings-page/settings-page.component';
import { AdminLocationPageComponent } from './pages/admin-location-page/admin-location-page.component';
import {DialogEditComponent, LocationOfCharacterComponent} from './components/location-of-character/location-of-character.component';
import { AdminToolbarComponent } from './components/admin-toolbar/admin-toolbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {
  AdminCharactersAddDialogComponent,
  AdminCharactersEditDialogComponent,
  AdminCharactersPageComponent
} from './pages/admin-characters-page/admin-characters-page.component';
import { AdminUsersPageComponent } from './pages/admin-users-page/admin-users-page.component';
import { AdminGamePageComponent } from './pages/admin-game-page/admin-game-page.component';


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
    CharacterPageComponent,
    GamesPageComponent,
    MapComponent,
    GamesListComponent,
    SettingsPageComponent,
    DialogOverviewExampleDialogComponent,
    AdminLocationPageComponent,
    LocationOfCharacterComponent,
    DialogEditComponent,
    AdminToolbarComponent,
    AdminCharactersPageComponent,
    AdminCharactersEditDialogComponent,
    AdminCharactersAddDialogComponent,
    AdminUsersPageComponent,
    AdminGamePageComponent,
  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent,
    DialogEditComponent,
    AdminCharactersEditDialogComponent,
    AdminCharactersAddDialogComponent
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
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
