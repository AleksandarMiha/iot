import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISensor } from '../sensor/sensor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private _url: string = "../assets/db.json"
  constructor(private http: HttpClient) { }

  getSensor(): Observable<ISensor[]>{
    return this.http.get<ISensor[]>(this._url);
  }

}


// getE(): Observable<IEmployee[]>{
//   return this.http.get<IEmployee[]>(this._url);
// }
