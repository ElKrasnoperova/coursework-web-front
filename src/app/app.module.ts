import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatToolbarModule,  MatCardModule,
  MatSidenavModule, MatFormFieldModule, MatTooltipModule } from '@angular/material';
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
  MatTableModule
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
