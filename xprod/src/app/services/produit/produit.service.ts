import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from 'src/app/models/produit/produit';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor(private http:HttpClient ) { }
//recupere liste produit
  findAllProduits(){
    return this.http.get(AppSettings.APP_URL+"/produits")
  }
//poste un produit
  saveProduits(produit:Produit){
    return this.http.post(AppSettings.APP_URL+"/produits",produit)
  }
}
