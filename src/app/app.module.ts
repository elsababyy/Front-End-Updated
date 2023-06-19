import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugupdationComponent } from './bugupdation/bugupdation.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import { CreatebugComponent } from './createbug/createbug.component';
import { BComponent } from './b/b.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { SettingsComponent } from './settings/settings.component';
// import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    BugupdationComponent,
    BComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    LandingComponent,
    SettingsComponent,
    // LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
