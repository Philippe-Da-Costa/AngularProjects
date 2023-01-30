import { Router } from '@angular/router';
import { ActeurService } from './../../services/videos/acteur/acteur.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrls: ['./acteur.component.css']
})
export class ActeurComponent implements OnInit{
  declare acteurs:any[];
  declare form:FormGroup;
  formbuilder: any;

  constructor(
    private acteurService:ActeurService,
    private router:Router,
    private formBuilder:FormBuilder,
  ){}

  ngOnInit(): void {
     this.form = this.formbuilder.group({
     idActeur:['',Validators.required],
     nomActeur:['',Validators.required],
     prenomActeur:['',Validators.required],
     bioActeur:['',Validators.required],
     wikiActeur:['',Validators.required],
     illustrationActeur:['',Validators.required],
  });
  this.getActeur();
}

getActeur() {
  this.acteurService.findAllActeur().subscribe(
   data => {
     console.table(data);
     this.acteurs = data as any[];
   }
  );
 }



  }





