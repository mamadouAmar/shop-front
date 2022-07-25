export class Produit {
    constructor(
        private idProduit : Number,
        private libelle : String,
        private categorie : String,
        private typeProduit : String,
        private stock : Number,
        private coutUnitaire : Number,
        private prixVente : Number
    ){}
}

export class ProduitDTO {
    constructor(
        private idProduit : Number,
        private libelle : String,
        private categorie : String,
        private stock : Number,
        private coutUnitaire : Number,
        private prixVente : Number
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
