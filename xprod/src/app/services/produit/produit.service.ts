import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from 'src/app/models/produit/produit';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})

export class ProduitService {
  httpOptions={
    headers : new HttpHeaders({'content-Type': 'application/json'})
  }
  constructor(private http:HttpClient ) { }
//recupere liste produit
  findAllProduits(){
    return this.http.get(AppSettings.APP_URL+"/produits")
  }
 //recupere un media par son id
  editProduit(idProduit:number){
    return this.http.get(AppSettings.APP_URL+"/produits/"+idProduit)
  }

  //create
    saveProduits(produit:Produit){
      return this.http.post("http://localhost8080/produit",JSON.stringify(produit),this.httpOptions);
    }
      //mettre a jour un media
 updateProduit(produit:Produit){
  return this.http.put(AppSettings.APP_URL+"/produits/"+produit.idProduit,JSON.stringify(produit),this.httpOptions);
 }
 //supprimer un media
 deleteProduit(idProduit:number){
  return this.http.delete(AppSettings.APP_URL+"/produits/"+idProduit);
 }

}
