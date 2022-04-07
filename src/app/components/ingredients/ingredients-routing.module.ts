import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients.component';
import { MealsDetailComponent } from './meals-detail/meals-detail.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientsComponent
  },
  {
    path: 'meals/:id',
    component: MealsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule { }
