import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsensorComponent } from './newsensor/newsensor.component';
import { EditSensorComponent } from './edit-sensor/edit-sensor.component';
import { SensorComponent } from './sensor/sensor.component';

const routes: Routes = [
  { path: '', component: SensorComponent},
  { path: 'newsensor', component: NewsensorComponent},
  { path: 'edit/:id', component: EditSensorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
