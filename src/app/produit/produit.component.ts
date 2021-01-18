import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProduitService} from '../Services/produit.service';
import {Produit} from '../Model/Produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  //allArticles: Article[];
  //statusCode: number;
 // requestProcessing = false;
  produitIdToUpdate = null;
 // processValidation = false;
  constructor( private produitService: ProduitService, private activatedRoute: ActivatedRoute ) { }
 id: any ;
  produit: any ;
  inquiryForm: Boolean;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.produitService.getProduitById(this.id).subscribe(
      data => {
        console.log(data);
        this.produit = data ;
      }
    );
  }



}
