import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SensorService } from '../servicesapi/sensor.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { AlertService } from '../service-notification/alert.service';


@Component({
  selector: 'app-newsensor',
  templateUrl: './newsensor.component.html',
  styleUrls: ['./newsensor.component.scss']
})
export class NewsensorComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private sensor: SensorService,
    private router: Router,
    public snackBar: MatSnackBar,
    private showMessageAlert: AlertService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      image: '../assets/images/ico_alarm.svg',
      path: ['', Validators.required],
      unitSymbol: [''],
      value: [''],
      lastUpdate: [new Date().toLocaleDateString(), Validators.required],
      type: ['', Validators.required]
    });
  }
  get f() { return this.addForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.sensor.createSensor(this.addForm.value)
      .subscribe(data => {
        this.showMessageAlert.showSuccessAlert()
        this.router.navigate(['/']);
      }), err => {
        this.showMessageAlert.showErrorAlert()
      };
  }
}

