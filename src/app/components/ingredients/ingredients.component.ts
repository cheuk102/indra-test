import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredientsList: any;

  constructor(
    private ingredientsService: IngredientsService
  ) { }

  ngOnInit(): void {
    this.getIngredientsList();
  }

  getIngredientsList = () => {
    this.ingredientsService.getIngredients().then((response: any) => {
      console.log({response});
      this.ingredientsList = response;
    }).catch(err => {
      console.error({err});
    })
  }

}
