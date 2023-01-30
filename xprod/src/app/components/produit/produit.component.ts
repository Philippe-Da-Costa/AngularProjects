import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

declare produits:any[];
declare form:FormGroup;


constructor(
  private produitService:ProduitService,
  private router : Router,
  private formbuilder:FormBuilder,
){}
  ngOnInit(): void {
    this.form = this.formbuilder.group({

      idProduit:['',Validators.required],
      refInterneProduit:['',Validators.required],
      designationProduit:['',Validators.required],
      descriptifProduit:['',Validators.required],
      prixVenteUProduit:['',Validators.required],
      illustration:['',Validators.required],

    });
    this.getProduit();
  }
 //afficher
  getProduit() {
   this.produitService.findAllProduits().subscribe(
    data => {
      console.table(data);
      this.produits = data as any[];
    }
   );
  }
}
