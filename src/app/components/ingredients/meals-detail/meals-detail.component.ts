import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IngredientsService } from '../../../services/ingredients.service';

@Component({
  selector: 'app-meals-detail',
  templateUrl: './meals-detail.component.html',
  styleUrls: ['./meals-detail.component.scss']
})
export class MealsDetailComponent implements OnInit, OnDestroy {

  private subcriptionParam: Subscription;
  choosedIngredient: string;
  mealsList: any;

  constructor(
    private route: ActivatedRoute,
    private ingredientsService: IngredientsService
  ) {
    this.subcriptionParam = new Subscription();
    this.choosedIngredient = '';
  }
  
  ngOnInit(): void {
    this.subcriptionParam = this.route.params.subscribe(params => {
      
      this.choosedIngredient = params.id;
      this.getMealsWithIngredient(this.choosedIngredient);
      
    });
  }
  
  
  getMealsWithIngredient(ingredient: string): void {
    this.ingredientsService.getMealsIngredients(ingredient).then((response: any) => {
      this.mealsList = response;
    }).catch(err => {
      console.error(err);
    });
  }

  ngOnDestroy(): void {
    this.subcriptionParam.unsubscribe();
  }
  
}
