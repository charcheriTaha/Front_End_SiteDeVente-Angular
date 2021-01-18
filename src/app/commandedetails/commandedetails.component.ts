import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../Services/commande.service';
import {ShareddataService} from '../Services/shareddata.service';
import {Commande} from '../Model/Commande';

@Component({
  selector: 'app-commandedetails',
  templateUrl: './commandedetails.component.html',
  styleUrls: ['./commandedetails.component.css']
})
export class CommandedetailsComponent implements OnInit {
commande :Commande ;
date:any="";
  constructor(private shareddata: ShareddataService, private commandeService:CommandeService) { }

  ngOnInit(): void {
    this.commande =this.shareddata.commande;
    console.log(this.commande);
    this.date=this.commande.dat;

  }
  updateCommande(commande :Commande): void {
    this.shareddata.commande=commande ;
    console.log(this.date);
    this.commande.dat=this.date ;


    this.commandeService.updateCommande(commande).subscribe(
      data => {
        console.log("reponce ",data);
      }
    );
  }
}
