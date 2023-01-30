import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acteur } from 'src/app/models/acteur/acteur';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class ActeurService {

  httpOptions={
    headers : new HttpHeaders({'content-Type': 'application/json'})
  }

  constructor(private http:HttpClient) { }

//recupere liste d' acteurs
findAllActeurs(){
  return this.http.get(AppSettings.APP_URL+"/acteurs")
}
//recupere un acteur par son id
getActeurById(idActeur:number){
  return this.http.get(AppSettings.APP_URL+"/acteur/"+idActeur)
}
//ajouter un acteur
addActeur(acteur:Acteur){
    return this.http.post(AppSettings.APP_URL+"/acteur",JSON.stringify(acteur),this.httpOptions);
  }
  //mettre a jour un acteur
updateActeur(acteur:Acteur){
return this.http.put(AppSettings.APP_URL+"/acteur/"+acteur.idActeur,JSON.stringify(acteur),this.httpOptions);
}
//supprimer un acteur
deleteActeur(idActeur:number){
return this.http.delete(AppSettings.APP_URL+"/acteur/"+idActeur);
}

}
