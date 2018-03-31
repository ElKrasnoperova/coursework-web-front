import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatToolbarModule,  MatCardModule,
  MatSidenavModule, MatFormFieldModule, MatTooltipModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EpisodeChooserComponent } from './episode-chooser/episode-chooser.component';
import { CardForMapComponent } from './card-for-map/card-for-map.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';



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
  MatCheckboxModule
];
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    EpisodeChooserComponent,
    CardForMapComponent,
    AuthPageComponent,
    SignInFormComponent,
    SignUpFormComponent
  ],
  imports: [
    MatTabsModule,
    materialModules,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SlideshowModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
