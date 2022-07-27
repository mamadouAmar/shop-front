import { HttpClient } from '@angular/common/http';
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

  public gets() : Observable<Array<AchatDTO>>{
    return this.http.get<AchatDTO[]>(
      `${this.apiServerUrl}`);
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
