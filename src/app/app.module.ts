import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorComponent } from './sensor/sensor.component';
import { SearchSensorPipe } from './sensor/search-sensor.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NewsensorComponent } from './newsensor/newsensor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,MatSnackBarModule, MatInputModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    SensorComponent,
    SearchSensorPipe,
    NewsensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,MatSnackBarModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
