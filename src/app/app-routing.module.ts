import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AchatPageComponent } from './components/achat/achat-page/achat-page.component';
import { InventairePageComponent } from './components/inventaire/inventaire-page/inventaire-page.component';
import { ProduitPageComponent } from './components/produit/produit-page/produit-page.component';
import { VentePageComponent } from './components/vente/vente-page/vente-page.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'produit', component:ProduitPageComponent},
  {path:'vente', component:VentePageComponent},
  {path:'achat', component:AchatPageComponent},
  {path:'inventaire', component:InventairePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
