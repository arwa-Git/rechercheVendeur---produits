import { Injectable } from '@angular/core';
import { client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: client[]; //un tableau de Produit

  client!: client;

  constructor(){
    this.clients = [
      { name: 'arwa laouini', photoUrl: '../assets/149071.png' },
      { name: 'user2', photoUrl: '../assets/149071.png' },
      { name: 'user1 ', photoUrl: '../assets/149071.png' },
    ];
  }
  listeclient(): client[] {
    return this.clients;
  }
  ajouterclient(prod: client,photoUrl: string, urls: string[]) {
    this.clients.push(prod);
   // const photo: Image = {
     // url: photoUrl
    //};

    //prod.photo = photo;
    //prod.urls = urls;


    this.clients.push(prod);

  }

  supprimerclient(c: client) {
    // Remove the client from the list
    this.clients = this.clients.filter((client) => client !== c);
  }

  //consulterProduit(category: string):client {
    //this.client = this.client.find(p => p.categoryProduit == category)!;
    //return this.produit;
  //}

  //updateProduit(p:Produit)
//{

// const photo: Image = {
   // url: photoUrl
 // };

//    p.urls = urls;

// console.log(p);
//this.supprimerProduit(p);
//this.ajouterProduit(p,photoUrl,urls);
//}


  }
  
