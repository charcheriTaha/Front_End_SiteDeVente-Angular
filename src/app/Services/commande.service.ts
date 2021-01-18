import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../Model/Produit';
import {Commande} from '../Model/Commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  constructor(private httpClient: HttpClient) {
  }

//retourner la liste des commande
  getListcommandes(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/commande/list');
  }
  deleteProduitById(id: any): Observable<any>{
    return this.httpClient.get('http://localhost:8080/commande/deleteCommande/' + id);
  }

  getProduitById(id: any): Observable<any>{
    return this.httpClient.get('http://localhost:8080/commande/getCommande/' + id);
  }
  updateCommande(commande :Commande): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body=JSON.stringify(commande);
    //let body1=JSON.parse(body);
    return this.httpClient.post('http://localhost:8080/commande/updateCommande/', body,{ headers: headers
    });

  }
  public getCommandeByDate(date:Date ){
    return this.httpClient.get("http://localhost:8080/getCommandeByDate/"+date);
  }
}


