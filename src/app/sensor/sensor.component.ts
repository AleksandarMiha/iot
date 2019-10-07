import { Component, OnInit } from '@angular/core';
import { SensorService } from '../servicesapi/sensor.service';
import { ISensor } from './sensor';

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

  deleteSensor(id): void {
    if(window.confirm('Are sure you want to delete this sensor ?')){
      console.log(id);
      this.sensor.deleteSensor(id)
        .subscribe( data => {
          // this.sensorss = this.sensorss.filter((u:any) => u !== id);
          this.sensorss.slice(id,1);
          this.getSensor();
        })
     }

  };

}