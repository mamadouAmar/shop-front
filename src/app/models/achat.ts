import { LigneAchat } from "./ligne-achat";

export class Achat {

    constructor(
        public idAchat : Number,
        public dateEnregistrement : Date,
        public frais : Number,
        public totalAchats: Number,
        public coutTotal : Number,
        public dateDerniereModification : Date,
        public achats : Array<LigneAchat>,
    )
    {

    }
}

export class AchatDTO {
    constructor(
        public idAchat : Number,
        public dateEnregistrement : Date,
        public coutTotal : Number
    )
    {

    }
}

export class AchatForAdd {
    constructor(
        public idAchat : Number,
        public dateEnregistrement : Date,
        public frais : Number,
        public totalAchats: Number,
        public coutTotal : Number,
        public dateDerniereModification : Date,
    )
    {

    }
}