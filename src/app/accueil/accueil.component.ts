import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../Services/produit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {Produit} from '../Model/Produit';
import {ShareddataService} from '../Services/shareddata.service';
import {LoginService} from "../Services/login.service";
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  produitIdToUpdate = null;

  constructor(private produitService: ProduitService, private shareddata: ShareddataService,private router:Router,public loginservice:LoginService) {
  }

  produits: any = [];
  produit: any;
//isAdmin=this.loginservice.isAdmin();
  ngOnInit(): void {
    this.produitService.getListProduits().subscribe(
      data => {
        console.log(data);
        this.produits = data;
      },
      error => {
        this.loginservice.logout();
        this.router.navigateByUrl('/Main/login');
  //      this.loginservice
      }
    );


  }

  deleteProduitById(id: any): void {

    this.produitService.deleteProduitById(id).subscribe(
      data => {
        console.log('Produit supprimé !');
        this.produitService.getListProduits().subscribe(
          data1 => {
            console.log(data1);
            this.produits = data1;
          }
        );

      }
    );
  }

  importProduit(produit: Produit): void {
    this.shareddata.produit = produit;
    this.router.navigate(['Main/produitdetails']);
  }

  commanderProduit(id) {
    
  }
}
