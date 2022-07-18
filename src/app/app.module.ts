import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitPageComponent } from './components/produit/produit-page/produit-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import { VentePageComponent } from './components/vente/vente-page/vente-page.component';
import { AchatPageComponent } from './components/achat/achat-page/achat-page.component';
import { InventairePageComponent } from './components/inventaire/inventaire-page/inventaire-page.component';
import { CalculInventaireComponent } from './components/inventaire/calcul-inventaire/calcul-inventaire.component';
import { ListingInventaireComponent } from './components/inventaire/listing-inventaire/listing-inventaire.component';
import { ListAchatComponent } from './components/achat/list-achat/list-achat.component';
import { AjoutAchatComponent } from './components/achat/ajout-achat/ajout-achat.component';
import { ListVenteComponent } from './components/vente/list-vente/list-vente.component';
import { AjoutVenteComponent } from './components/vente/ajout-vente/ajout-vente.component';
import { ListProduitComponent } from './components/produit/list-produit/list-produit.component';
import { AjoutProduitComponent } from './components/produit/ajout-produit/ajout-produit.component';
import { AccueilComponent } from './components/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitPageComponent,
    VentePageComponent,
    AchatPageComponent,
    InventairePageComponent,
    CalculInventaireComponent,
    ListingInventaireComponent,
    ListAchatComponent,
    AjoutAchatComponent,
    ListVenteComponent,
    AjoutVenteComponent,
    ListProduitComponent,
    AjoutProduitComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
