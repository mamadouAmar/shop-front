import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vente, VenteDTO, VenteForAdd } from '../models/vente';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  constructor() { }

  public gets() : Observable<Array<VenteDTO>>{
    return of();
  }

  public get(id:Number) : Observable<Vente>{
    return of()
  }

  public post(vente : VenteForAdd) : Observable<Vente>{
    return of()
  }
}
