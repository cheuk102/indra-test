import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './ingredients.component';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { MealsDetailComponent } from './meals-detail/meals-detail.component';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    IngredientsComponent,
    MealsDetailComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    MenuModule
  ]
})
export class IngredientsModule { }
