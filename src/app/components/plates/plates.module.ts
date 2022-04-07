import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatesRoutingModule } from './plates-routing.module';
import { PlatesComponent } from './plates.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [
    PlatesComponent
  ],
  imports: [
    CommonModule,
    PlatesRoutingModule,
    FormsModule,
    MenuModule
  ]
})
export class PlatesModule { }
