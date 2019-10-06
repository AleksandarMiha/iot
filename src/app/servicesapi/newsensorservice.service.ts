import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsensorserviceService {

  constructor(private http: HttpClient) { }

  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    path: new FormControl('',  Validators.required),
    unitSymbol: new FormControl('',Validators.required),
    value: new FormControl('', Validators.required),
    lastUpdate: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  })
}
