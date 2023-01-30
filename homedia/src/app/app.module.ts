import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediasComponent } from './components/medias/medias.component';
import { ContentComponent } from './components/partials/content/content.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActeurComponent } from './components/administration/video/acteur/acteur.component';
import { AddActeurComponent } from './components/administration/video/add-acteur/add-acteur.component';
import { EditActeurComponent } from './components/administration/video/edit-acteur/edit-acteur.component';
import { ListActeurComponent } from './components/administration/video/list-acteur/list-acteur.component';



@NgModule({
  declarations: [
    AppComponent,
    MediasComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ActeurComponent,
    AddActeurComponent,
    EditActeurComponent,
    ListActeurComponent,

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
