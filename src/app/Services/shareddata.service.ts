import { Injectable } from '@angular/core';
import {Produit} from '../Model/Produit';
import {Commande} from '../Model/Commande';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {
produit :Produit;
commande:Commande;
  constructor() { }
}
