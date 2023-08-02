import { Image } from "./image.model";

export class Produit {
    categoryProduit?: string;
    nomProduit?: string;
    prixProduit?: number;
    description?: string;
    urls?: string[]=[];
    imageUrl?: string; // Add this property to store the URL of the selected image
  }