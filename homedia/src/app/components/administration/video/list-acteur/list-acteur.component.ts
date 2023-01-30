import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActeurService } from 'src/app/services/acteur/acteur.service';

@Component({
  selector: 'app-list-acteur',
  templateUrl: './list-acteur.component.html',
  styleUrls: ['./list-acteur.component.css']
})
export class ListActeurComponent implements OnInit {
  declare acteurs:any;
  constructor(
    private acteurService :ActeurService,
    private router :Router,
    private route :ActivatedRoute
  ){};

  ngOnInit(): void {
   this.acteurService.findAllActeurs().subscribe(
    data=>{
      console.table(data);
      this.acteurs=data;
    });
    if(this.route.snapshot.paramMap.get("idActeur"))
 return this.remove();
  }
  remove() {
    const idActeur= Number(this.route.snapshot.paramMap.get("idActeur")) ;
    this.acteurService.deleteActeur(idActeur).subscribe(
      () => {
        this.router.navigate(["/acteur"])
      }
      )

     }
    }
