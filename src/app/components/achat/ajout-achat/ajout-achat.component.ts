import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Achat, AchatForAdd } from 'src/app/models/achat';
import { AchatService } from 'src/app/services/achat.service';

@Component({
  selector: 'app-ajout-achat',
  templateUrl: './ajout-achat.component.html',
  styleUrls: ['./ajout-achat.component.css']
})
export class AjoutAchatComponent implements OnInit {

  private achat! : AchatForAdd;

  constructor(private achatService : AchatService) { }

  ngOnInit(): void {
  }

  public postAchat(achat : AchatForAdd){
    this.achatService.post(achat).subscribe(
      (response : Achat) => {
        this.achat = response
      },
      (error : HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

}
