import { ReducedProduit } from "./produit";

export class LigneAchat {
    constructor(
        public idLigneAchat : Number,
        public produit : ReducedProduit,
        public quantite : Number,
        public coutUnitaire : Number,
        public coutTotal : Number,
        public prixVente : Number 
    )
    {}
    
}

export class LigneAchatForAdd {

    public coutUnitaire! : Number;
    public prixAchat! : Number;


    constructor(
        public produit : ReducedProduit,
        public quantite : Number,
        public coutTotal : Number,
        public frais : Number,
    )
    {  
        this.coutUnitaire = this.coutTotal/this.quantite;
    }
}
