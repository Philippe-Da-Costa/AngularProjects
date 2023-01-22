import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediasComponent } from './components/medias/medias.component';

const routes: Routes = [
 {
  path:"medias",
  component:MediasComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
