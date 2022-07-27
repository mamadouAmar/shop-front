import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produit, ProduitForAdd } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  private produit! : ProduitForAdd;

  constructor(
    private produitService : ProduitService
  ) { }

  ngOnInit(): void {
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

}
