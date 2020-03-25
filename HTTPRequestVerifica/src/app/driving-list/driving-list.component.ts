import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DrivingModel } from '../driving.model';
import { Observable } from 'rxjs';
import { Rent } from '../rent.model';

@Component({
    selector: 'app-driving-list',
    templateUrl: './driving-list.component.html',
    styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {

    obs_drive: Observable<DrivingModel[]>
    drivingList: DrivingModel[];
    selectedCar: DrivingModel;

    constructor(public http: HttpClient) { }

    @Input()
    rentList: Rent[];

    ngOnInit(): void {

        this.obs_drive = this.http.get<DrivingModel[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi');
        this.obs_drive.subscribe(this.getModel);
    }


    getModel = (modello: DrivingModel[]) => {

        this.drivingList = modello;
    }

    noleggia(modello: DrivingModel): boolean {
        console.log(modello);
        this.selectedCar = modello;

        if (this.toModelList().includes(this.selectedCar)) {

            this.rentList[this.trova(this.selectedCar)].incrementa();

        } else {
            
            this.rentList.push(new Rent(modello, 1));
        }

        return false;
    }

toModelList(): DrivingModel[]{

    let result = new Array<DrivingModel>();

    for (let i = 0; i < this.rentList.length; i++) {
        
        result.push(this.rentList[i].getModel());
    }

    return result;
}

trova(modello: DrivingModel): number{

    let result = 0;

    for (let i = 0; i < this.rentList.length; i++) {

        if (modello.tipo == this.rentList[i].getModel().tipo) {
            result = i;
            break;
        }
    }

    return result;
}
}
