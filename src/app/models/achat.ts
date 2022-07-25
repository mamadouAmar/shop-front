import { LigneAchat } from "./ligne-achat";

export class Achat {
    constructor(
        private idAchat : Number,
        private dateEnregistrement : Date,
        private frais : Number,
        private totalAchats : Number,
        private coutTotal : Number,
        private achats : LigneAchat[],
    )
    {

    }
}

export class AchatDTO {
    constructor(
        private idAchat : Number,
        private dateEnregistrement : Date,
        private coutTotal : Number
    )
    {

    }
}
