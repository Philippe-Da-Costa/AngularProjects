import { Acteur } from './../../../models/videos/acteur/acteur';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class ActeurService {
  httpOptions={
    headers : new HttpHeaders({'content-Type': 'application/json'})
  }
  constructor(private http:HttpClient ) { }
  //recupere liste d acteurs
  findAllActeur(){
    return this.http.get(AppSettings.APP_URL+"/acteurs")
  }
 //recupere un acteur par son id
  editActeur(idActeur:number){
    return this.http.get(AppSettings.APP_URL+"/acteur/"+idActeur)
  }

  //create
    saveActeur(acteur:Acteur){
      return this.http.post("http://localhost8080/acteur",JSON.stringify(acteur),this.httpOptions);
    }
      //mettre a jour un media
 updateActeur(acteur:Acteur){
  return this.http.put(AppSettings.APP_URL+"/acteur/"+Acteur.idActeur,JSON.stringify(acteur),this.httpOptions);
 }
 //supprimer un media
 deleteActeur(idActeur:number){
  return this.http.delete(AppSettings.APP_URL+"/acteur/"+idActeur);
 }



}
