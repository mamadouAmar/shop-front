import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vente, VenteDTO, VenteForAdd } from '../models/vente';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  private apiServerUrl = `${environment.apiBaseUrl}/vente`;

  constructor(private http : HttpClient) { }

  public gets() : Observable<Array<VenteDTO>>{
    return this.http.get<VenteDTO[]>(
      `${this.apiServerUrl}`
    );
  }

  public get(id:Number) : Observable<Vente>{
    return this.http.get<Vente>(
      `${this.apiServerUrl}/${id}`
    );
  }

  public post(vente : VenteForAdd) : Observable<Vente>{
    return this.http.post<Vente>(
      `${this.apiServerUrl}`, vente
    );
  }
}
