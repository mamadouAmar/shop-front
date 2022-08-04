import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-view-produit',
  templateUrl: './view-produit.component.html',
  styleUrls: ['./view-produit.component.css']
})
export class ViewProduitComponent implements OnInit {

  idProduit! : number;
  produit! : Produit;

  constructor(private produiService : ProduitService, 
          private route: ActivatedRoute,
          private router: Router) { }

  ngOnInit(): void {
    this.idProduit = this.route.snapshot.params['id'];
    this.loadProduit(this.idProduit);
  }

  loadProduit(id : Number){
    this.produiService.get(id).
    subscribe((data) => {
      this.produit = data;
      console.log(this.produit)
    });
  }

}
