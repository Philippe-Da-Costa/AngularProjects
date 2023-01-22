import { Component } from '@angular/core';
import { Selfie } from './models/selfie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon test ANGULAR';
  subtitle=' ici je teste les templates';
  logoAffiche=false;

  lesSelfies:Selfie[]= [
    { image:"" ,wookie:{nom:'Chewie ',selfies:[]}},
    { image:"" ,wookie:{nom:'Chewie2',selfies:[]}},
    { image:"" ,wookie:{nom:'Chewie3',selfies:[]}}
  ];
}
