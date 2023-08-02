import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Image } from '../model/image.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

declare var window: any
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],

})
export class ProduitsComponent implements OnInit {
  produits?: Produit[];
  //un tableau de Produit
  formModal: any
  apiURLCat: string = 'http:localhost:8080/produits/cat';

  constructor(private produitService: ProduitService) {
    this.produits = [];
  }

  // open() {
  //this.modalService.open(this.addview, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
  //}, (reason) => {
  //});
  //}
  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }

  //pour spring boot (  ngOnInit(): void {
  //  this.fetchProduits(); }  )
  


  //pour spring boot 
  //( fetchProduits(): void {
   // this.produitService.listeProduits().subscribe((produits) => {
    //  this.produits = produits;}); })
  
    
  openModal() {
    this.formModal.show();
  }
  dosomthing() {
    this.formModal.hide();
  }

  UploadImage(nom: any, image: any) {
    //this.open();

  }

  RemoveImage(category: any, nom: any) {

  }

  ProceedUpload() {

  }

   //supprimer pour angular 
   //  supprimerProduit(produit: Produit): void {
    // if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
    //  this.produitService.supprimerProduit(produit.id).subscribe(() => {
        // Refresh the list of products after deleting a product
       // this.fetchProduits();
     // });
   // }
 // }


  supprimerProduit(prod: Produit) {
    //console.log(prod);
    let conf = confirm("Etes-vous sur ?");
    if (conf)
      this.produitService.supprimerProduit(prod);
  }
  url = 'https://img.icons8.com/ios/100/000000/contract-job.jpg';

  onSelect(event: any, produit: any) {
    const files = event.target.files;
    produit.photo = files[0]; // Store the selected image file directly in the product's 'photo' property
  
    // Read the selected image and store its URL in the product's 'imageUrl' property
    let reader = new FileReader();
    reader.readAsDataURL(produit.photo);
    reader.onload = (event: any) => {
      produit.imageUrl = event.target.result;
    };
  }

}
