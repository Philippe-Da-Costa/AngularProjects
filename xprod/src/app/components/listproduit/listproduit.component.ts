import { ProduitService } from './../../services/produit/produit.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit{

  declare produits:any;

  constructor(
    private produitService :ProduitService,
    private router :Router,
    private route :ActivatedRoute
  ){}
  ngOnInit(): void {
   this.produitService.findAllProduits().subscribe(   //suscribe recupere les datas
    data=>{
      console.table(data);
      this.produits=data;
    }) ;
    
if(this.route.snapshot.paramMap.get('idProduit'))
 return this.remove();
  }

  remove() {
    const idProduit = Number(this.route.snapshot.paramMap.get('idProduit')) ;
    this.produitService.deleteProduit(idProduit).subscribe(
      () => {
        this.router.navigate(["/produit"])
      }
      )
    }}
