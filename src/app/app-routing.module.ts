import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ProduitsComponent } from './produits/produits.component';
import { RecherchevendeurComponent } from './recherchevendeur/recherchevendeur.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  {path: "produits" , component:ProduitsComponent},
{path: "add-produit" , component:AddProduitComponent},
{path: "rechv", component: RecherchevendeurComponent},
{path: "search/:query", component: RecherchevendeurComponent},
{path: "update/:category", component: UpdateComponent},


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
