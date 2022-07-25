import { LigneVente } from "./ligne-vente";

export class Vente {
    constructor(
        private idVente : Number,
        private dateVente : Date,
        private totalVente : Number,
        private ventes : LigneVente[]
    )
    {}
}
