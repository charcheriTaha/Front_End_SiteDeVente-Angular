import { Component, OnInit } from '@angular/core';
import {ClientService} from '../Services/client.service';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
export class ListclientComponent implements OnInit {
 clients: any = [];
  constructor(private clientService: ClientService ) { }

  ngOnInit(): void {
    this.clientService.getListClients().subscribe(
      data => {
        console.log(data);
        this.clients = data ;
      }
    );
  }

}
