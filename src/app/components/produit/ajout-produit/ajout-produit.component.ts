import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produit, ProduitForAdd } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  private produit! : ProduitForAdd;

  private produitObtenu! : Produit

  produitFormGroup! : FormGroup;

  constructor(
    private produitService : ProduitService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.produitFormGroup = this.fb.group(
      {
        libelle : this.fb.control(String(''), [Validators.required]),
        categorie : this.fb.control(String('')),
        typeProduit : this.fb.control(String('')),
        coutUnitaire : this.fb.control(Number('')),
        prixVente : this.fb.control(Number(''))
      }
    );
  }

  public postAchat(produit : ProduitForAdd){
    this.produitService.post(produit).subscribe(
      (response: Produit) => {
        this.produitObtenu = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public ajouterProduit(){
    if(this.produitFormGroup.valid){
      let lib = this.produitFormGroup.controls["libelle"].value
      let categorie = this.produitFormGroup.controls["categorie"].value
      let typeProduit = this.produitFormGroup.controls["typeProduit"].value
      let coutUnitaire = this.produitFormGroup.controls["coutUnitaire"].value
      let prixVente = this.produitFormGroup.controls["prixVente"].value
      this.produit = new ProduitForAdd(lib, categorie, typeProduit, coutUnitaire, prixVente)
      
      this.postAchat(this.produit);

      //diriger vers voir produit
      this.produitFormGroup.reset()
    }
  }

}
