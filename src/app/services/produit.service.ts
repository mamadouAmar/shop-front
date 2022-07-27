import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produit, ProduitDTO, ProduitForAdd } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() { }

  public gets() : Observable<Array<ProduitDTO>>{
    return of();
  }

  public get(id:Number) : Observable<Produit>{
    return of()
  }

  public post(produit : ProduitForAdd) : Observable<Produit>{
    return of()
  }
}
