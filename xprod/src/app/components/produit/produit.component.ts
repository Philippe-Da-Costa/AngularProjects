import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
 
declare produits:any[];
constructor(
  private produitService:ProduitService,
  private router : Router,
){}
  ngOnInit(): void {
    this.getProduit();
  }
  getProduit() {
   this.produitService.findAllProduits().subscribe(
    data => {
      console.log(data);
      this.produits = data as any[];
    }
   );
  }
}
