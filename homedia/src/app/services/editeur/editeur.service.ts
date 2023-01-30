import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Editeur } from 'src/app/models/editeur/editeur';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class EditeurService {
  httpOptions={
    headers : new HttpHeaders({'content-Type': 'application/json'})
  }

  constructor(private http:HttpClient) { }

//recupere liste d'editeurs
findAllEditeurs(){
  return this.http.get(AppSettings.APP_URL+"/editeurs")
}
//recupere un editeur par son id
getEditeurById(idEditeur:number){
  return this.http.get(AppSettings.APP_URL+"/editeur/"+idEditeur)
}
//ajouter un editeur
addEditeur(editeur:Editeur){
    return this.http.post(AppSettings.APP_URL+"/editeur",JSON.stringify(editeur),this.httpOptions);
  }
//mettre a jour un editeur
updateEditeur(editeur:Editeur){
return this.http.put(AppSettings.APP_URL+"/editeur/"+editeur.idEditeur,JSON.stringify(editeur),this.httpOptions);
}
//supprimer un editeur
deleteEditeur(idEditeur:number){
return this.http.delete(AppSettings.APP_URL+"/editeur/"+idEditeur);
}

}
