import { DrivingModel } from "./driving.model"

export class Rent{
    modello: DrivingModel;
    n_rent: number;

    constructor( modello: DrivingModel, n_rent: number){

        this.modello = modello;
        this.n_rent = n_rent;
    }
}