import { Component, OnInit, ViewChild } from '@angular/core';
import { SensorService } from '../servicesapi/sensor.service';
import { Object} from "../table-grid/table";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.scss']
})
export class TableGridComponent implements OnInit {
  sensorInfoTable  : [] = [];
  displayedColumns: string[] = ['id', 'name', 'path' , 'unitSymbol' , 'value' , 'lastUpdate' , 'type', 'image'];
  sensorInfoTableDataSource  = new MatTableDataSource(this.sensorInfoTable);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private sensor: SensorService) { }

  ngOnInit() {
    this.getSensor();
    this.sensorInfoTableDataSource.sort = this.sort;
    this.sensorInfoTableDataSource.paginator = this.paginator;
  }
  getSensor() {
    this.sensor.getSensor().subscribe((data: any) => {
        // console.log(data.sensors)
        this.sensorInfoTable = data;
        this.sensorInfoTableDataSource.data = this.sensorInfoTable;
    })
  }

  searchSensor(filterValue: string){
    this.sensorInfoTableDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
