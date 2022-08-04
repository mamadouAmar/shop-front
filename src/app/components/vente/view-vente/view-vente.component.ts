import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vente } from 'src/app/models/vente';
import { VenteService } from 'src/app/services/vente.service';

@Component({
  selector: 'app-view-vente',
  templateUrl: './view-vente.component.html',
  styleUrls: ['./view-vente.component.css']
})
export class ViewVenteComponent implements OnInit {

  idVente!: Number;
  vente!: Vente;

  constructor(private venteService : VenteService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.idVente = this.route.snapshot.params['id'];
    this.getVente(this.idVente);
  }

  getVente(id : Number){
    this.venteService.get(id)
      .subscribe(
        data => {
          this.vente = data
          console.log(this.vente)
        }
      );
  }

}
