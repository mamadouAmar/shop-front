import { LigneVente } from "./ligne-vente";

export class Vente {
    constructor(
        public idVente : Number,
        public dateVente : Date,
        public totalVente : Number,
        public dateDerniereModification : Date,
        public ventes : Array<LigneVente>
    )
    {}
}

export class VenteDTO {
    constructor(
        public idVente : Number,
        public dateVente : Date,
        public totalVente : Number,
    )
    {}
}

export class VenteForAdd {
    constructor(
        public idVente : Number,
        public dateVente : Date,
        public totalVente : Number,
        public ventes : Array<LigneVente>
    )
    {}
}
