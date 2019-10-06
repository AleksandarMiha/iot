import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISensor } from '../sensor/sensor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private _url: string = "http://localhost:3000/sensors"
  constructor(private http: HttpClient) { }


  getSensor(): Observable<ISensor[]>{
    return this.http.get<ISensor[]>(this._url);
  }

  createSensor(isensor: ISensor): Observable<ISensor[]> {
    return this.http.post<ISensor[]>(this._url, isensor);
  }


}
