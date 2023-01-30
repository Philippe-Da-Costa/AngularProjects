import { ActivatedRoute, Router } from '@angular/router';
import { MediasService } from './../../../../services/medias/medias.service';
import { Medias } from 'src/app/models/medias/medias';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-medias',
  templateUrl: './list-medias.component.html',
  styleUrls: ['./list-medias.component.css']
})
export class ListMediasComponent implements OnInit {

  declare medias:any;

  constructor(
    private mediasService :MediasService,
    private router:Router,
    private route: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.mediasService.findAllMedias().subscribe(
      data=>{
      console.table(data);
      this.medias=data;
      }
    );

      if(this.route.snapshot.paramMap.get('idMedia'))
      return this.remove();
      }
      remove(){
        const idMedia = Number(this.route.snapshot.paramMap.get('idMedia'));
        this.mediasService.deleteMedia(idMedia).subscribe(
          ()=>{
            this.router.navigate(["/media"])
          }
        )
      }
    }
