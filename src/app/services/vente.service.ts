import { HttpClient, HttpParams } from '@angular/common/http';
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

  public findVentes(
    pageNumber = 0,
    pageSize = 10
  ) : Observable<any> {
    return this.http.get(
      `${this.apiServerUrl}`,
      {
        params : new HttpParams()
        .set('page', pageNumber)
        .set('size', pageSize)
      }
    );
  }

  public get(id:Number) : Observable<any>{
    return this.http.get<any>(
      `${this.apiServerUrl}/${id}`
    );
  }

  public post(vente : VenteForAdd) : Observable<any>{
    return this.http.post<any>(
      `${this.apiServerUrl}`, vente
    );
  }
}
