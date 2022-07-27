import { ReducedProduit } from "./produit";

export class LigneVente {
    constructor(
        public idLigneVente : Number,
        public produit : ReducedProduit,
        public prixVente : Number,
        public quantite : Number,
        public total : Number
    )
    {
    }
}

export class LigneVenteForAdd {
    
    public total! : Number;
    public prixVente! : Number;

    constructor(
        public produit : ReducedProduit,
        public quantite : Number,
    )
    {
        this.prixVente =this.produit.prixVente;
        this.total = Number(this.produit.prixVente) * Number(this.quantite);
    }

}
