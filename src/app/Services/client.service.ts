import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) {
  }


  //retourner la liste des produit
 getListClients(): Observable<any> {
  return this.httpClient.get('http://localhost:8080/client/list');
  }
}
