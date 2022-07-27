import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitPageComponent } from './components/produit/produit-page/produit-page.component';
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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http'



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
    AccueilComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
