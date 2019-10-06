import { Pipe, PipeTransform } from '@angular/core';
import { SensorComponent } from './sensor.component';

@Pipe({
  name: 'searchSensor'
})
export class SearchSensorPipe implements PipeTransform {

  transform(sensorss, searchTerm: string): SensorComponent {
    if (!sensorss || !searchTerm) {
      return sensorss;
  }

  return sensorss.filter(sensor =>
    sensor.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
