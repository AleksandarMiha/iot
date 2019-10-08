import { Component, OnInit } from '@angular/core';
import { SensorService } from '../servicesapi/sensor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from "@angular/material";
import { AlertService } from '../service-notification/alert.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-sensor',
  templateUrl: './edit-sensor.component.html',
  styleUrls: ['./edit-sensor.component.scss']
})
export class EditSensorComponent implements OnInit {
  id: number;
  sens: any;
  showAlert: any;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private sensor: SensorService,
    public snackBar: MatSnackBar,
    private showMessageAlert: AlertService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.sens = {};
    this.sensor.getSingleSensor(this.id)
      .subscribe(data => {
        this.sens = data;
      }, error => console.log(error));
    }
    updateSensor() {
      this.sensor.updateSensor(this.id, this.sens)
        .subscribe(
           data => this.showMessageAlert.showSuccessUpdateAlert(),
           error => this.showMessageAlert.showErrorAlert());
      this.router.navigate(['/']);
    }
    onSubmit() {
      this.updateSensor();
    }
  }

