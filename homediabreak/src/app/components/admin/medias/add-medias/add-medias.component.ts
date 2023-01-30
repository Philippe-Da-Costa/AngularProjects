import { MediasService } from './../../../../services/medias/medias.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-medias',
  templateUrl: './add-medias.component.html',
  styleUrls: ['./add-medias.component.css']
})
export class AddMediasComponent implements OnInit {
  declare  form:FormGroup;
 constructor(
  private mediasService : MediasService,
  private formBuilder :FormBuilder,
  private router:Router

 ){};

ngOnInit(): void {
    this.form= this.formBuilder.group({
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
      formatVideos:['',Validators.required],
    });
  }
ajoutMedias(){
  console.table(this.form.value);
  this.mediasService.addMedias(this.form.value).subscribe(
    ()=>{
      this.router.navigate(["/medias"]);
    }
  );
}
}


