import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../Model/Produit';
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
private host:string='http://localhost:8080';
private jwtToken=null;
  constructor(private httpClient: HttpClient ,private loginService:LoginService) { }

//retourner la liste des produit
getListProduits(): Observable<any>{
    if(this.jwtToken==null) this.jwtToken=this.loginService.loadToken();
  return this.httpClient.get(this.host+'/produit/list',{headers:new HttpHeaders({'Authorization':this.jwtToken})}) ;
}

deleteProduitById(id: any): Observable<any>{
  if(this.jwtToken==null) this.jwtToken=this.loginService.loadToken();
  return this.httpClient.get(this.host+'/produit/deleteProduit/' + id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
}

  getProduitById(id: any): Observable<any>{
    if(this.jwtToken==null) this.jwtToken=this.loginService.loadToken();
    return this.httpClient.get(this.host+'/produit/getProduit/' + id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }


 updateProduit(produit :Produit): Observable<any> {
   if(this.jwtToken==null) this.jwtToken=this.loginService.loadToken();
  // return this.httpClient.post('http://localhost:8080/produit/updateProduit/' + id);
  // const headers = { 'Content-Type': 'application/json'}
 //const body=JSON.stringify(produit);
 //   let body1=JSON.parse(body);
  // console.log(body1)
   let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   const body=JSON.stringify(produit);
     //let body1=JSON.parse(body);
   return this.httpClient.post(this.host+'/updateProduit/', body,{headers:new HttpHeaders({'Authorization':this.jwtToken})});

 }
  public getProduitByName(name:string ){
    if(this.jwtToken==null) this.jwtToken=this.loginService.loadToken();
    return this.httpClient.get(this.host+'/searching Produit by nom containing/'+name,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }








}
