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

  produitFormGroup! : FormGroup;

  constructor(
    private produitService : ProduitService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.produitFormGroup = this.fb.group(
      {
        libelle : this.fb.control(null, [Validators.required]),
        categorie : this.fb.control(null),
        typeProduit : this.fb.control(null),
        coutUnitaire : this.fb.control(null),
        prixVente : this.fb.control(null)
      }
    );
  }

  public postAchat(produit : ProduitForAdd){
    this.produitService.post(produit).subscribe(
      (response: Produit) => {
        this.produit =response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public ajouterProduit(){
    console.log(this.produitFormGroup.value)
  }

}
