import { Component, OnInit, Input } from '@angular/core';
import { DrivingModel } from '../driving.model';

@Component({
    selector: 'app-rented',
    templateUrl: './rented.component.html',
    styleUrls: ['./rented.component.css']
})
export class RentedComponent implements OnInit {

    @Input()
    modello: DrivingModel;

    constructor() { }

    ngOnInit(): void {
    }

}
