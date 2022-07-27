import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit, ProduitDTO, ProduitForAdd } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiServerUrl = `${environment.apiBaseUrl}/produit`;

  constructor(private http : HttpClient) { }

  public gets() : Observable<Array<ProduitDTO>>{
    return this.http.get<ProduitDTO[]>(
      `${this.apiServerUrl}`
    );
  }

  public get(id:Number) : Observable<Produit>{
    return this.http.get<Produit>(
      `${this.apiServerUrl}/${id}`
    );
  }

  public post(produit : ProduitForAdd) : Observable<Produit>{
    return this.http.post<Produit>(
      `${this.apiServerUrl}`, produit
    );
  }
}
