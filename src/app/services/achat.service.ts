import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Achat, AchatForAdd } from '../models/achat';

@Injectable({
  providedIn: 'root'
})
export class AchatService {

  constructor() { }

  public gets() : Observable<Array<any>>{
    return of();
  }

  public get(id:Number) : Observable<Achat>{
    return of()
  }

  public post(achat : AchatForAdd) : Observable<Achat>{
    return of()
  }
}
