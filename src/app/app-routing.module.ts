import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsensorComponent } from './newsensor/newsensor.component';

const routes: Routes = [
  { path: 'newsensor', component: NewsensorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
