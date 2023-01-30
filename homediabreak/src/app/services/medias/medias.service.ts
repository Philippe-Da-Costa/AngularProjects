
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medias } from 'src/app/models/medias/medias';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class MediasService {
  httpOptions={
    headers : new HttpHeaders({'content-Type': 'application/json'})
  }

  constructor( private http:HttpClient ) {}
  //recupere les medias
  findAllMedias(){
    return this.http.get(AppSettings.APP_URL+"/medias")
  }
  //recupere un media par son id
  getMediaById(idMedias:number){
    return this.http.get(AppSettings.APP_URL+"/media/"+idMedias)
   }
  //ajouter un nouveau media
  addMedias(medias:Medias){
    return this.http.post(AppSettings.APP_URL+"/media",JSON.stringify(medias),this.httpOptions)
  }
  //mettre a jour un media
  updateMedias(medias:Medias){
    return this.http.put(AppSettings.APP_URL+"/media/"+medias.idMedia,JSON.stringify(medias),this.httpOptions);
   }
   //supprimer un media
   deleteMedia(idMedia:number){
    return this.http.delete(AppSettings.APP_URL+"/media/"+idMedia);
   }
}
