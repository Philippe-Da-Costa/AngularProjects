import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent  implements OnInit {
  declare  form:FormGroup;
  constructor(
    private produitService : ProduitService,
    private formBuilder : FormBuilder,
    private router:Router
  ){};
  ngOnInit(): void {
     this.form = this.formBuilder.group({
      idProduit:['',Validators.required],
      refInterneProduit:['',Validators.required],
      designationProduit:['',Validators.required],
      descriptifProduit:['',Validators.required],
      prixVenteUProduit:['',Validators.required],
      illustration:['',Validators.required],
    });
  }
//creer
create(){
  console.log(this.form.value);
  this.produitService.saveProduits(this.form.value).subscribe(
    ()=>{
      this.router.navigate(['/produit']);
    }
    );
}
}
