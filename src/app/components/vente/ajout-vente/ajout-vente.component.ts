import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { LigneVenteForAdd } from 'src/app/models/ligne-vente';
import { VenteForAdd } from 'src/app/models/vente';
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

  constructor(private venteService : VenteService,
    private fbVente : FormBuilder,
    private fbLignevente : FormBuilder)
  {

  }

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.ligneVenteFormGroup = this.fbLignevente.group(
      {
        produit : this.fbLignevente.control(null, [Validators.required]),
        quantite : this.fbLignevente.control(Number(1), [Validators.required])
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  displayedColumns: string[] = ['idProduit', 'libelle', 'quantite', 'total'];


  public ajouterLigneVente() {
    if(this.ligneVenteFormGroup.valid){
      // let p = this.ligneVenteFormGroup.controls['produit'];
      // let q = this.ligneVenteFormGroup.controls['quantite'];
      // let lv = new LigneVenteForAdd(p, q);
      // this.ligneVentes.push(lv);
    }
    // this.ligneVente.push(new LigneAchatForAdd(
    //   l['produit'], l['quantite']
    // ));
  }

  public enregistrerVente(){
    this.nouveauVente = new VenteForAdd(
      new Date(), Number(0), this.ligneVentes
    );
    if(this.ligneVentes)
      this.venteService.post(this.nouveauVente);
  }

}
