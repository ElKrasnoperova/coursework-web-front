import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatToolbarModule,  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule, MatTooltipModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

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
  MatSelectModule
];
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    MatTabsModule,
    materialModules,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
