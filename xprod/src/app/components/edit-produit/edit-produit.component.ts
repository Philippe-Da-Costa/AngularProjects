import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit/produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  declare editForm :FormGroup;

  constructor(
    private produitService:ProduitService,
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder,

  ){}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      idProduit:['',Validators.required],
      refInterneProduit:['',Validators.required],
      designationProduit:['',Validators.required],
      descriptifProduit:['',Validators.required],
      prixVenteUProduit:['',Validators.required],
      illustration:['',Validators.required],
    });
if(this.route.snapshot.paramMap.get('idProduit'))
  {
    return this.edit();
  }


}


edit(){ const idProduit = Number(this.route.snapshot.paramMap.get('idProduit'));
this.produitService.editProduit(idProduit).subscribe(
  data=>{
    this.editForm.setValue(data);
  }
  );}

  update(){
    console.log(this.editForm.value);
    if(this.editForm.valid){
      this.produitService.updateProduit(this.editForm.value).subscribe(
        ()=>{
        this.router.navigate(['/produit'])
        }
      )
    }
  }
}
