import { Component } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  currentProduit:Produit =new Produit();
  currentProduitUrls: string[] = [];


  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
               private produitService: ProduitService){


    }
    ngOnInit():void{
      const category = this.activatedRoute.snapshot.params['category']; // Use 'category' instead of 'nom'
      this.currentProduit = this.produitService.consulterProduit(category);
      this.currentProduitUrls = this.currentProduit.urls || []; // Assign the product's urls to the currentProduitUrls, or an empty array if undefined
    }
    
    updateProduit() {
      this.produitService.updateProduit(this.currentProduit); // Call the updateProduit method of the service to update the product
      this.router.navigate(["produits"]);
    }
    
    Updatep() {
      if (window.confirm('Êtes-vous sûr de modifier votre  produit ?')) {
        // Logique pour mettre à jour le compte ici
        console.log('produit a été  modifié avec succès !');
      } else {
        console.log('Modification annulée.');
      }
    }
    
    url = 'https://img.icons8.com/ios/100/000000/contract-job.jpg';
    onImageSelect(event: any) {
      const files = event.target.files;
      if (files.length > 0) {
        const selectedImage = files[0];
        // Read the selected image and store its data in the currentProduit.imageUrl property
        const reader = new FileReader();
        reader.readAsDataURL(selectedImage);
        reader.onload = (event: any) => {
          this.currentProduit.imageUrl = event.target.result;
        };
      }
    }
}
