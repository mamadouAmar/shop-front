import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AchatPageComponent } from './components/achat/achat-page/achat-page.component';
import { AjoutAchatComponent } from './components/achat/ajout-achat/ajout-achat.component';
import { ListAchatComponent } from './components/achat/list-achat/list-achat.component';
import { ViewAchatComponent } from './components/achat/view-achat/view-achat.component';
import { InventairePageComponent } from './components/inventaire/inventaire-page/inventaire-page.component';
import { AjoutProduitComponent } from './components/produit/ajout-produit/ajout-produit.component';
import { ListProduitComponent } from './components/produit/list-produit/list-produit.component';
import { ProduitPageComponent } from './components/produit/produit-page/produit-page.component';
import { ViewProduitComponent } from './components/produit/view-produit/view-produit.component';
import { AjoutVenteComponent } from './components/vente/ajout-vente/ajout-vente.component';
import { ListVenteComponent } from './components/vente/list-vente/list-vente.component';
import { VentePageComponent } from './components/vente/vente-page/vente-page.component';
import { ViewVenteComponent } from './components/vente/view-vente/view-vente.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'produit', component:ProduitPageComponent,
  children : [
    {path:'', component: ListProduitComponent},
    {path: "edit", component: AjoutProduitComponent},
    {path:":id", component : ViewProduitComponent},
  ]},
  {path:'vente', component:VentePageComponent,
  children : [
    {path:'', component: ListVenteComponent},
    {path: "edit", component: AjoutVenteComponent},
    {path:":id", component : ViewVenteComponent},
  ]},
  {path:'achat', component:AchatPageComponent,
  children : [
    {path:'', component: ListAchatComponent},
    {path: "edit", component: AjoutAchatComponent},
    {path:":id", component : ViewAchatComponent},

  ]},
  {path:'inventaire', component:InventairePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
