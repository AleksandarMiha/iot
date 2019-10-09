import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISensor } from '../sensor/sensor';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { pipe } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private _url: string = "https://dbapiiot.herokuapp.com/sensors"
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) { }


  getSensor(): Observable<ISensor[]>{
    return this.http.get<ISensor[]>(this._url, this.httpOptions).pipe(delay(500));
  }

  getSingleSensor(id: number): Observable<any> {
    return this.http.get(`${this._url}/${id}`, this.httpOptions);
  }

  createSensor(isensor: ISensor): Observable<ISensor[]> {
    return this.http.post<ISensor[]>(this._url, isensor, this.httpOptions);
  }

  deleteSensor(id: number) {
    return this.http.delete(`${this._url}/${id}`, this.httpOptions);
  }

  updateSensor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this._url}/${id}`, value, this.httpOptions).pipe(delay(500));
  }


}
