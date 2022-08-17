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

    constructor(
        public produit : ReducedProduit,
        public quantite: Number,
        public coutTotal : Number,
        public prixVente : Number
    )
    {  
        if(this.coutTotal.valueOf() != 0){
            this.coutUnitaire = Number(this.coutTotal)/Number(this.quantite);
        }
        else{
            this.coutUnitaire = this.produit.coutUnitaire;
        }
        if(this.prixVente.valueOf() == 0){
            this.prixVente = this.produit.prixVente
        }
    }
}
