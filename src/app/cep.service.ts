import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpclient : HttpClient) { }
  getCEP(cep : string) : Observable<any>{
    return this.httpclient.get(`http://viacep.com.br/ws/${cep}/json/`)
  }
}
