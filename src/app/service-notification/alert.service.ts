import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public snackBar: MatSnackBar) { }

  showSuccessAlert(){
    this.snackBar.open("You have successfully added the sensor", null, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
   });
  }

  showSuccessUpdateAlert(){
    this.snackBar.open("You have successfully updated the sensor", null, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
   });
  }

  showErrorAlert(){
    this.snackBar.open("Ooooups, somethink went wrong", null, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
   });
  }

  showDeleteAlert() {
    this.snackBar.open("You have successfully deleted the sensor", null, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
   });
  }
}
