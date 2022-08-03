import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Achat, AchatDTO, AchatForAdd } from '../models/achat';

@Injectable({
  providedIn: 'root'
})
export class AchatService {

  private apiServerUrl = `${environment.apiBaseUrl}/achat`;

  constructor(private http : HttpClient) { }

  public gets() : Observable<any>{
    return this.http.get<any>(
      `${this.apiServerUrl}`);
  }

  public findAchats(
    pageNumber = 0,
    pageSize = 10
  ): Observable<any>{
    return this.http.get(
      `${this.apiServerUrl}`,
      {
        params : new HttpParams()
        .set('pageNumber', pageNumber)
        .set('pageSize', pageSize)
      }
    );
  }

  public get(id:Number) : Observable<Achat>{
    return this.http.get<Achat>(
      `${this.apiServerUrl}/${id}`
    );
  }

  public post(achat : AchatForAdd) : Observable<Achat>{
    return this.http.post<Achat>(
      `${this.apiServerUrl}`, AchatForAdd
    );
  }
}
