import { BaseModel } from "./BaseModel.models.js";

export class Accord extends BaseModel{

    constructor(props){
        super(props);
        this.assign(props);
        // this.hasMany("accord");
    }

    nom = "";
    chemin ="";

};