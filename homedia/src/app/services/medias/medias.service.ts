
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medias } from 'src/app/models/medias/medias';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class MediasService {

  constructor( private http:HttpClient ) {}
  findAllMedias(){
    return this.http.get(AppSettings.APP_URL+"/medias")
  }
  saveMedias(){
    return this.http.post(AppSettings.APP_URL+"/medias",Medias)
  }
}
