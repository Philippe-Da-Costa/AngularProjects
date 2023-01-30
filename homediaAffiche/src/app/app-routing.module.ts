import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent }  from './components/footer/footer.component';
import { HeaderComponent }  from './components/header/header.component';
import { MediasComponent }  from './components/medias/medias.component';

const routes: Routes = [
 {
  path:"medias",
  component:MediasComponent
},
// {
//   path:"header",
//   component:HeaderComponent
// },
{
  path:"footer",
  component:FooterComponent
},
{
  path:"",
  component:ContentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
