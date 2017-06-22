import { AuthGuard } from './auth.guard';
import { ContactModule } from './contact/contact.module';
import { SpotifyModule } from './spotify/spotify.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page-404/page-404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpotifyModule,
    ContactModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
