import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DrivingModel } from '../driving.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {

    obs_drive: Observable<DrivingModel[]>
    drivingList: DrivingModel[];

    constructor(public http: HttpClient) { }

    ngOnInit(): void {

        this.obs_drive = this.http.get<DrivingModel[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi');
        this.obs_drive.subscribe( this.getModel );
    }


    getModel = (modello: DrivingModel[]) => {

        this.drivingList = modello;
    }
}
