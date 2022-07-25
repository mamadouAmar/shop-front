import { ReducedProduit } from "./produit";

export class LigneAchat {
    constructor(
        private idLigneAchat : Number,
        private produit : ReducedProduit,
        private quantite : Number,
        private coutUnitaire : Number,
        private coutTotal : Number,
        private prixVente : Number 
    )
    {}
    
}
