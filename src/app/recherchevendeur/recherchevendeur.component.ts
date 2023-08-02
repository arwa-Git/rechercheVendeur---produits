import { Component, OnInit } from '@angular/core';
import{client} from '../model/client.model';
import { ClientService } from '../services/client.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-recherchevendeur',
  templateUrl: './recherchevendeur.component.html',
  styleUrls: ['./recherchevendeur.component.css']
})
export class RecherchevendeurComponent implements OnInit {
  clients?: client[];
  searchclients: client[];
  selectedClient: client | undefined;

  constructor(private clientService: ClientService) {
    this.clients = [];
    this.searchclients = this.clients;
  }

  ngOnInit(): void {
    this.clients = this.clientService.listeclient(); // Fetch the clients list from the service
  }

  searchv: any;

  showCard(client: client) {
    this.selectedClient = client;
  }

  deleteClient(client: client) {
    const confirmDelete = window.confirm('Êtes-vous sûr de supprimer le vendeur ?');
    if (confirmDelete) {
      // Call the client service to remove the vendor from the list
      this.clientService.supprimerclient(client);
      // Fetch the updated clients list from the service
      this.clients = this.clientService.listeclient();
      // Reset the selectedClient to hide the card
      this.selectedClient = undefined;
    }
  }
}