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
import {MatButtonModule,MatSnackBarModule, MatInputModule, MatSelectModule} from '@angular/material';
import { EditSensorComponent } from './edit-sensor/edit-sensor.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { TableGridComponent } from './table-grid/table-grid.component'

@NgModule({
  declarations: [
    AppComponent,
    SensorComponent,
    SearchSensorPipe,
    NewsensorComponent,
    EditSensorComponent,
    TableGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,MatSnackBarModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
