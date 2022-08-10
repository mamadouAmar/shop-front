import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith, switchMap, debounceTime} from 'rxjs/operators';
import { LigneVenteForAdd } from 'src/app/models/ligne-vente';
import { ProduitDTO, ProduitForAdd, ReducedProduit } from 'src/app/models/produit';
import { VenteForAdd } from 'src/app/models/vente';
import { ProduitService } from 'src/app/services/produit.service';
import { VenteService } from 'src/app/services/vente.service';

@Component({
  selector: 'app-ajout-vente',
  templateUrl: './ajout-vente.component.html',
  styleUrls: ['./ajout-vente.component.css']
})
export class AjoutVenteComponent implements OnInit {

  nouveauVente! : VenteForAdd;

  @Input() datasource = new MatTableDataSource<LigneVenteForAdd>();

  venteFormGroup! : FormGroup;

  ligneVenteFormGroup! : FormGroup;

  ligneVentes : LigneVenteForAdd[] = [];

  produits! : ProduitDTO[];
  loading!: boolean;

  constructor(private venteService : VenteService, 
    private produitService : ProduitService,
    private fbVente : FormBuilder,
    private fbLignevente : FormBuilder)
  {
    
  }

  selectedProduitControl = new FormControl('');
  filteredOptions! : Observable<ProduitDTO[]>
  options: ProduitDTO[] = [];
  

  ngOnInit() {

    this.ligneVenteFormGroup = this.fbLignevente.group(
      {
        produit : this.fbLignevente.control(String(''), [Validators.required]),
        quantite : this.fbLignevente.control(Number, [Validators.required])
      }
    )

    this.venteFormGroup = this.fbVente.group(
      {
        
      }
    );

    this.filteredOptions = this.selectedProduitControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(
        (value) => 
        {
          return this._filter(value || ''); 
        }
        ),
    );
  }

  private _filter(value: string): Observable<ProduitDTO[]> {
    return this.produitService.getProduits()
      .pipe(
        map(response => response.filter(option => {
            return option.libelle.toLowerCase().includes(value.toLowerCase())
          }
         )
        )
      )
  }

  displayedColumns: string[] = ['idProduit', 'libelle', 'quantite', 'total'];

  getProduitByLibelle(libelle : string) : any{
    for (const produit of this.produitService.produits) {
      if(produit.libelle == libelle)
        return produit;
    }
    return null
  }

  public ajouterLigneVente() {
    if(this.ligneVenteFormGroup.valid){
      let lib = this.ligneVenteFormGroup.controls['produit'].value;
      let q = this.ligneVenteFormGroup.controls['quantite'].value;
      let p = this.getProduitByLibelle(lib)
      let pToAdd = new ReducedProduit(p.idProduit, p.libelle, p.coutUnitaire, p.prixVente)
      let lv = new LigneVenteForAdd(pToAdd, q);
      this.ligneVentes.push(lv);
      this.datasource.data.push(lv);
    }
  }

  // getProduits(){
  //   this.produitService.getProduits().subscribe(
  //     (produits) => {
  //       this.produits = produits;
  //       this.getLibelleProduits();
  //     }
  //   );
  // }

  // public getLibelleProduits() : void{
  //   let libelles: String[] = [];
  //   for (let index = 0; index < this.produits.length; index++) {
  //     libelles.push(this.produits[index].libelle);
  //   }
  //   this.options = libelles;
  // }

  public enregistrerVente(){
    this.nouveauVente = new VenteForAdd(
      new Date(), Number(0), this.ligneVentes
    );
    if(this.ligneVentes)
      this.venteService.post(this.nouveauVente);
  }

}
