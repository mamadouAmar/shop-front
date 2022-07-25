import { ReducedProduit } from "./produit";

export class LigneVente {
    constructor(
        private idLigneVente : Number,
        private produit : ReducedProduit,
        private prixVente : Number,
        private quantite : Number,
        private total : Number
    )
    {
    }
}
