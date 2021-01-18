import { Component, OnInit } from '@angular/core';
import {ShareddataService} from '../Services/shareddata.service';
import {Produit} from '../Model/Produit';
import {ProduitService} from '../Services/produit.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produitdetails',
  templateUrl: './produitdetails.component.html',
  styleUrls: ['./produitdetails.component.css']
})
export class ProduitdetailsComponent implements OnInit {
produit:Produit ;
nom :any="";
description :any="";
prix :any="";
status :any="";
  constructor(private shareddata: ShareddataService,private produitService: ProduitService ) { }

  ngOnInit(): void {
    this.produit=this.shareddata.produit;
    this.nom=this.produit.nom;
    this.description=this.produit.description;
    this.prix=this.produit.prix;
    this.status=this.produit.status;
  }
  updateProduit(produit: Produit): void {
    this.shareddata.produit = produit;
console.log(this.status);
produit.nom=this.nom ;
produit.description=this.description ;
produit.prix=this.prix ;
produit.status=this.status ;

    this.produitService.updateProduit(produit).subscribe(
      data => {
        console.log("reponce ",data);
      }
    );
  }
}
