import { EditProduitComponent } from './components/edit-produit/edit-produit.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './../../../xprod/src/app/components/produit/produit.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { ListproduitComponent } from './components/listproduit/listproduit.component';

const routes: Routes = [
 {
  path:'produit',
  component:ProduitComponent
 },
 {
  path:'addProduit',
component:AddProduitComponent
 },
 {
  path : 'produit/:idProduit',
  component:ListproduitComponent
 }
 ,{
  path:'edit/:idProduit',
  component:EditProduitComponent
 },
 {
  path:'',redirectTo:'produit',pathMatch:'full'
 }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
