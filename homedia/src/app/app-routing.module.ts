import { ListActeurComponent } from './components/administration/video/list-acteur/list-acteur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActeurComponent } from './components/administration/video/acteur/acteur.component';
import { AddActeurComponent } from './components/administration/video/add-acteur/add-acteur.component';
import { MediasComponent }  from './components/medias/medias.component';
import { ContentComponent } from './components/partials/content/content.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HeaderComponent } from './components/partials/header/header.component';

const routes: Routes = [
 {
  path:"medias",
  component:MediasComponent
},
{
  path:"header",
   component:HeaderComponent
 },
{
  path:"footer",
  component:FooterComponent
},
{
  path:"",
  component:ContentComponent
},
 {
  path:"acteur",
component:ActeurComponent
 },
 {
  path:"add-acteur",
  component:AddActeurComponent
 },
 {
  path:"list-acteur",
  component:ListActeurComponent
 },{
  path:"acteur/:idActeur",
  component:ListActeurComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
