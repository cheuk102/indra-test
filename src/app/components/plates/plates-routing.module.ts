import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatesComponent } from './plates.component';

const routes: Routes = [
  {
    path: '',
    component: PlatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatesRoutingModule { }
