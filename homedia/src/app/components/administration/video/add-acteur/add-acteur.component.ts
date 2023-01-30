import { ActeurService } from 'src/app/services/acteur/acteur.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-acteur',
  templateUrl: './add-acteur.component.html',
  styleUrls: ['./add-acteur.component.css']
})
export class AddActeurComponent implements OnInit {

  declare form:FormGroup;

  constructor(
    private acteurService:ActeurService,
    private formBuilder : FormBuilder,
    private router:Router
    ){};


  ngOnInit(): void {
   this.form =this.formBuilder.group({
    idActeur:["",],
    nomActeur:['',Validators.required],
    prenomActeur:['',Validators.required],
    bioActeur:['',Validators.required],
    wikiActeur:['',Validators.required],
    illustrationActeur:['',Validators.required],
   });
  }

  //ajouter un acteur
create(){
  console.log(this.form.value);
  this.acteurService.addActeur(this.form.value).subscribe(
    ()=>{
      this.router.navigate(['/acteur']);
    }
    );
}

}
