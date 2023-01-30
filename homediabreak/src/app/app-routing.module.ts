
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediasComponent } from './components/medias/medias.component';
import { ContentComponent } from './components/partials/content/content.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HeaderComponent } from './components/partials/header/header.component';



const routes: Routes = [
  {
    path:"",
    component:ContentComponent
  },
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
