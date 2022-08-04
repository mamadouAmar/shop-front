import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achat } from 'src/app/models/achat';
import { AchatService } from 'src/app/services/achat.service';

@Component({
  selector: 'app-view-achat',
  templateUrl: './view-achat.component.html',
  styleUrls: ['./view-achat.component.css']
})
export class ViewAchatComponent implements OnInit {

  idAchat! : Number;
  achat! : Achat

  constructor(
    private achatService : AchatService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.idAchat = this.route.snapshot.params['id'];
    this.getAchat(this.idAchat);
    console.log(this.achat);
  }

  getAchat(id : Number){
    this.achatService.get(id)
      .subscribe(
        (data) => {
          this.achat = data
          console.log(data)
        }
      );
  }

}
