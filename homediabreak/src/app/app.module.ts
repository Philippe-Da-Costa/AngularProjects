import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediasComponent } from './components/medias/medias.component';
import { ContentComponent } from './components/partials/content/content.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { ListMediasComponent } from './components/admin/medias/list-medias/list-medias.component';
import { AddMediasComponent } from './components/admin/medias/add-medias/add-medias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideosComponent } from './components/Videos/videos/videos.component';
import { ActeurComponent } from './components/acteurs/acteur/acteur.component';
import { VideoComponent } from './components/video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    MediasComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ListMediasComponent,
    AddMediasComponent,
    VideosComponent,
    ActeurComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
