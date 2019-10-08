import { Component, OnInit } from '@angular/core';
import { SensorService } from '../servicesapi/sensor.service';
import { Object} from "../table-grid/table";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.scss']
})
export class TableGridComponent implements OnInit {
  sensorInfoTable  : Object[] = [];
  displayedColumns: string[] = ['id', 'name', 'path' , 'unitSymbol' , 'value' , 'lastUpdate' , 'type', 'image'];
  sensorInfoTableDataSource  = new MatTableDataSource(this.sensorInfoTable);



  constructor(private sensor: SensorService) { }

  ngOnInit() {
    this.getSensor();
  }
  getSensor() {
    this.sensor.getSensor().subscribe((data: any) => {
        // console.log(data.sensors)
        this.sensorInfoTable = data;
        this.sensorInfoTableDataSource.data = this.sensorInfoTable;
    })
  }

}
