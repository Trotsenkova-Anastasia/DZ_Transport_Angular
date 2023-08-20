import { Component } from '@angular/core';

@Component({
  selector: 'app-plane-comp',
  templateUrl: './plane-comp.component.html',
  styleUrls: ['./plane-comp.component.css']
})
export class PlaneCompComponent {
Name:string="'Мрія'"
Wingspan:string="88.4 m"
Length:string="84 m"
Height:string="18.1 m"
MaximumTakeoffWeight:string="640 tons"
FlightRange:string="15,400 km"
MaximumSpeed:string="850 km/h"
}
