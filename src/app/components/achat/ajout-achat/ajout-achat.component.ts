import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AchatForAdd } from 'src/app/models/achat';
import { LigneAchatForAdd } from 'src/app/models/ligne-achat';
import { ProduitDTO, ReducedProduit } from 'src/app/models/produit';
import { AchatService } from 'src/app/services/achat.service';
import { ProduitService } from 'src/app/services/produit.service';
import { distinctUntilChanged, map, startWith, switchMap, debounceTime, tap } from 'rxjs/operators';



@Component({
  selector: 'app-ajout-achat',
  templateUrl: './ajout-achat.component.html',
  styleUrls: ['./ajout-achat.component.css']
})
export class AjoutAchatComponent implements OnInit {

  selectedProduitControl = new FormControl('');
  filteredOptions! : Observable<ProduitDTO[]>
  options: ProduitDTO[] = [];

  displayedColumns: string[] = ['idProduit', 'libelle', 'quantite', 'total', 'prixVente'];

  nouvelAchat! : AchatForAdd;
  ligneAchats: LigneAchatForAdd[] = [];

  produits! : ProduitDTO[];
  loading!: boolean;

  totalAchat : number = 0;

  frais : number = 0

  coutTotaux = this.totalAchat+this.frais;

  datasource= new MatTableDataSource<LigneAchatForAdd>(this.ligneAchats);

  achatFormGroup! : FormGroup;
  ligneAchatFormGroup! : FormGroup;

  constructor(private achatService : AchatService,
    private produitService : ProduitService,
    private fbAchat : FormBuilder,
    private fbLigneAchat : FormBuilder) { }

  ngOnInit(): void {

    this.ligneAchatFormGroup = this.fbLigneAchat.group(
      {
        produit : this.fbLigneAchat.control(String(''), [Validators.required]),
        quantite : this.fbLigneAchat.control(Number, [Validators.required]),
        coutTotal : this.fbLigneAchat.control(Number(0)),
        prixVente : this.fbLigneAchat.control(Number(0))
      }
    )

    this.achatFormGroup = this.fbAchat.group(
      {
        frais : this.fbAchat.control(this.frais),
        coutTotaux : this.fbAchat.control(this.coutTotaux)
      }
    )

    this.filteredOptions = this.selectedProduitControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => {
         
      }),
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

  getProduitByLibelle(libelle : string) : any{
    for (const produit of this.produitService.produits) {
      if(produit.libelle == libelle)
        return produit;
    }
    return null
  }

  public ajouterLigneAchat(){
    if(this.ligneAchatFormGroup.valid){
      let lib = this.ligneAchatFormGroup.controls['produit'].value;
      let q = this.ligneAchatFormGroup.controls['quantite'].value;
      let ct = this.ligneAchatFormGroup.controls['coutTotal'].value;
      let pv = this.ligneAchatFormGroup.controls['prixVente'].value;
      let p = this.getProduitByLibelle(lib);
      let pToAdd = new ReducedProduit(p.idProduit, p.libelle, p.coutUnitaire, p.prixVente);
      let la = new LigneAchatForAdd(pToAdd, q, ct, pv);
      this.ligneAchats.push(la);
      this.datasource._updateChangeSubscription();
      this.updateTotalAchat();
      this.ligneAchatFormGroup.reset();

    }
  }

  private updateTotalAchat(){
    this.totalAchat = 0;
    for (const la of this.ligneAchats) {
      this.totalAchat += la.coutTotal.valueOf();
    }
    this.coutTotaux = this.frais + this.totalAchat;
  }

  public enregistrerAchat(){
    if(this.achatFormGroup.valid){
      this.frais = this.achatFormGroup.controls['frais'].value;
      this.coutTotaux = this.frais + this.totalAchat;
      this.nouvelAchat = new AchatForAdd(
        new Date(), this.frais, this.totalAchat, this.coutTotaux, new Date()
      )
      if(this.ligneAchats){
        this.achatService.post(this.nouvelAchat)
        .subscribe(value => {
          console.log(value);
          this.ligneAchats = [];
          this.datasource = new MatTableDataSource(this.ligneAchats);
          this.frais = 0;
          this.totalAchat = 0;
          this.achatFormGroup.reset();
        });
      }
    }
  }

  // public postAchat(achat : AchatForAdd){
  //   this.achatService.post(achat).subscribe(
  //     (response : Achat) => {
  //       this.nouvelAchat = response
  //     },
  //     (error : HttpErrorResponse) => {
  //       alert(error.message)
  //     }
  //   );
  // }

  resetAll(){
    this.achatFormGroup.reset();
    this.ligneAchatFormGroup.reset()
    this.totalAchat = 0;
    this.ligneAchats = [];
    this.datasource = new MatTableDataSource(this.ligneAchats);
  }

}
