import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';
import { LigneVenteForAdd } from 'src/app/models/ligne-vente';
import { ProduitDTO, ReducedProduit } from 'src/app/models/produit';
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

  venteFormGroup! : FormGroup;

  ligneVenteFormGroup! : FormGroup;

  ligneVentes : Array<LigneVenteForAdd> = [];

  produits! : ProduitDTO[];

  constructor(private venteService : VenteService, 
    private produitService : ProduitService,
    private fbVente : FormBuilder,
    private fbLignevente : FormBuilder)
  {
    this.getProduits();
  }

  myControl = new FormControl('');
  options!: String[];
  filteredOptions: Observable<String[]> | undefined;

  ngOnInit() {
    this.ligneVenteFormGroup = this.fbLignevente.group(
      {
        produit : this.fbLignevente.control(String, [Validators.required]),
        quantite : this.fbLignevente.control(Number, [Validators.required])
      }
    )

    this.venteFormGroup = this.fbVente.group(
      {
        
      }
    );

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): String[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  displayedColumns: string[] = ['idProduit', 'libelle', 'quantite', 'total'];


  public ajouterLigneVente() {
    if(this.ligneVenteFormGroup.valid){
      let lib = this.ligneVenteFormGroup.controls['produit'].value;
      let index = this.options.indexOf(lib);
      let q = this.ligneVenteFormGroup.controls['quantite'].value;
      let p = this.produits[index]
      let pToAdd = new ReducedProduit(p.idProduit, p.libelle, p.coutUnitaire, p.prixVente)
      let lv = new LigneVenteForAdd(pToAdd, q);
      this.ligneVentes.push(lv);
    }
    // this.ligneVentes.push(new LigneAchatForAdd(
    //   l['produit'], l['quantite']
    // ));
  }

  getProduits(){
    this.produitService.getProduits().subscribe(
      (produits) => {
        this.produits = produits;
        this.getLibelleProduits();
      }
    );
  }

  public getLibelleProduits() : void{
    let libelles: String[] = [];
    for (let index = 0; index < this.produits.length; index++) {
      libelles.push(this.produits[index].libelle);
    }
    this.options = libelles;
  }

  public enregistrerVente(){
    this.nouveauVente = new VenteForAdd(
      new Date(), Number(0), this.ligneVentes
    );
    if(this.ligneVentes)
      this.venteService.post(this.nouveauVente);
  }

}
