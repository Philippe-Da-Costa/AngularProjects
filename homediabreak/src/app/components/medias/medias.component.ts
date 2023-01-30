import { Component, OnInit } from '@angular/core';
import { MediasService } from './../../services/medias/medias.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.css']
})
export class MediasComponent implements OnInit{
  declare medias:any[];
  declare form:FormGroup;

  constructor(
    private mediasService:MediasService,
    private router:Router,
    private formBuilder:FormBuilder,
  ){}


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      idMedias:['',Validators.required],
      titreMedias:['',Validators.required],
      sousTitreMedias:['',Validators.required],
      descriptionMedias:['',Validators.required],
      illustrationMedias:['',Validators.required],
      createdAtMedias:['',Validators.required],
      updatedAtMedias:['',Validators.required],
      dureeVideos:['',Validators.required],
      categorieVideos:['',Validators.required],
      styleVideos:['',Validators.required],
      realisateurVideos:['',Validators.required],
      formatVideos:['',Validators.required],
    });
     this.getMedias();
  }

  getMedias(){
    this.mediasService.findAllMedias().subscribe(
      data=>{
        console.table(data);
         this.medias = data as any[];

      }
    );
  }
}
