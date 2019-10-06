import { Component, OnInit } from '@angular/core';
import { SensorService } from '../servicesapi/sensor.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {
  public sensorss: any = [];
  searchTerm: string;
  display: boolean = false;
  sortShow: boolean = true;

  constructor(private sensor: SensorService) { }

  ngOnInit() {
    this.getSensor();
    this.display = true;
    // this.sortAsc();
  }

  getSensor() {
    this.sensor.getSensor().subscribe((data: any) => {
        // console.log(data.sensors)
        this.sensorss = data;
        this.sortShow = true;
        this.display = false;
    }

       )
  }
  // this._employeeService.getE().subscribe(data => this.employees = data);

  sortAsc() {
    this.sensor.getSensor().subscribe(
      (data) => {
        this.sensorss.sort((a, b) => {
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          else return 0;
        });
         console.log("Sorted asc sensors" , this.sensorss)
         this.sortShow = false;
      },
      err => console.log(err)
    )
  }

}
