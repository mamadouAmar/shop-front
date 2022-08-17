import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Achat } from 'src/app/models/achat';
import { LigneAchat } from 'src/app/models/ligne-achat';
import { AchatService } from 'src/app/services/achat.service';

@Component({
  selector: 'app-view-achat',
  templateUrl: './view-achat.component.html',
  styleUrls: ['./view-achat.component.css']
})
export class ViewAchatComponent implements OnInit {

  idAchat! : Number;
  achat! : Achat;

  datasource! : DataSource<LigneAchat>;

  displayedColumns: string[] = ['idProduit', 'libelle', 'quantite', 'total'];


  constructor(
    private achatService : AchatService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.idAchat = this.route.snapshot.params['id'];
    this.getAchat(this.idAchat);
  }

  getAchat(id : Number){
    this.achatService.get(id)
      .subscribe(
        (data) => {
          this.achat = data
          this.datasource = new MatTableDataSource(this.achat.achats);
        }
      );
  }

}
