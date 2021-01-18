import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../Services/commande.service';
@Component({
  selector: 'app-list-commandes',
  templateUrl: './list-commandes.component.html',
  styleUrls: ['./list-commandes.component.css']
})
export class ListCommandesComponent implements OnInit {
commandes: any = [] ;
  constructor(private commandeService: CommandeService) { }
  ngOnInit(): void {
    this.commandeService.getListcommandes().subscribe(
      data => {
        console.log(data);
        this.commandes = data ;
      }
    );
  }

}
