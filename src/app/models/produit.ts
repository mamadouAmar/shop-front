export class Produit {
    constructor(
        public idProduit : Number,
        public libelle : String,
        public categorie : String,
        public typeProduit : String,
        public stock : Number,
        public coutUnitaire : Number,
        public prixVente : Number
    ){}
}

export class ProduitDTO {
    constructor(
        public idProduit : Number,
        public libelle : String,
        public categorie : String,
        public stock : Number,
        public coutUnitaire : Number,
        public prixVente : Number
    )
    {}
}

export class ReducedProduit {
    constructor(
        private idProduit : Number,
        private libelle : String,
        private coutUnitaire : Number,
        private prixVente : Number
    )
    {}
}
