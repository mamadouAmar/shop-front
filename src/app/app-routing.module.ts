import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AchatPageComponent } from './components/achat/achat-page/achat-page.component';
import { AjoutAchatComponent } from './components/achat/ajout-achat/ajout-achat.component';
import { ViewAchatComponent } from './components/achat/view-achat/view-achat.component';
import { InventairePageComponent } from './components/inventaire/inventaire-page/inventaire-page.component';
import { AjoutProduitComponent } from './components/produit/ajout-produit/ajout-produit.component';
import { ProduitPageComponent } from './components/produit/produit-page/produit-page.component';
import { ViewProduitComponent } from './components/produit/view-produit/view-produit.component';
import { AjoutVenteComponent } from './components/vente/ajout-vente/ajout-vente.component';
import { VentePageComponent } from './components/vente/vente-page/vente-page.component';
import { ViewVenteComponent } from './components/vente/view-vente/view-vente.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'produit', component:ProduitPageComponent,
  children : [
    {path:":id", component : ViewProduitComponent},
    {path: "edit", component: AjoutProduitComponent}
  ]},
  {path:'vente', component:VentePageComponent,
  children : [
    {path:":id", component : ViewVenteComponent},
    {path: "edit", component: AjoutVenteComponent}
  ]},
  {path:'achat', component:AchatPageComponent,
  children : [
    {path:":id", component : ViewAchatComponent},
    {path: "edit", component: AjoutAchatComponent}
  ]},
  {path:'inventaire', component:InventairePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
