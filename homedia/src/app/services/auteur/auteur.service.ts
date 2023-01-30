import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auteur } from 'src/app/models/auteur/auteur';

import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {
  httpOptions={
    headers : new HttpHeaders({'content-Type': 'application/json'})
  }

  constructor(private http:HttpClient) { }

//recupere liste d'auteurs
findAllAuteurs(){
  return this.http.get(AppSettings.APP_URL+"/auteurs")
}
//recupere un auteur par son id
getAuteurById(idAuteur:number){
  return this.http.get(AppSettings.APP_URL+"/auteur/"+idAuteur)
}
//ajouter un ateur
addAuteur(auteur:Auteur){
    return this.http.post(AppSettings.APP_URL+"/auteur",JSON.stringify(auteur),this.httpOptions);
  }
  //mettre a jour un auteur
updateAuteur(auteur:Auteur){
return this.http.put(AppSettings.APP_URL+"/auteur/"+auteur.idAuteur,JSON.stringify(auteur),this.httpOptions);
}
//supprimer un auteur
deleteAuteur(idAuteur:number){
return this.http.delete(AppSettings.APP_URL+"/auteur/"+idAuteur);
}

}
