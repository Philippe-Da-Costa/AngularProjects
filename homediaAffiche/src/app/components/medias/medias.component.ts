import { MediasService } from './../../services/medias/medias.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.css']
})
export class MediasComponent implements OnInit{
  declare medias:any[];

  constructor(
    private mediasService:MediasService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.getMedias();
  }
  getMedias() {
    this.mediasService.findAllMedias().subscribe(
      data=>{
        console.table(data);
         this.medias = data as any[];

      }
    );
  }
}
