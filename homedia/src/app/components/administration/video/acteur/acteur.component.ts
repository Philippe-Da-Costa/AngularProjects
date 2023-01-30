import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActeurService } from 'src/app/services/acteur/acteur.service';

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrls: ['./acteur.component.css']
})
export class ActeurComponent implements OnInit {

declare acteurs:any[];
declare form:FormGroup;

constructor(
  private acteurService:ActeurService,
  private router:Router,
  private formbuilder:FormBuilder,
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
  this.acteurService.findAllActeurs().subscribe(
    data=>{
      console.table(data);
      this.acteurs=data as any[];
    }
  )
  }

}
