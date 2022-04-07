import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlatesService } from '../../services/plates.service';
import { MealPlate } from '../models/MealPlate';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  mealPlate: MealPlate;
  ingredientsList: any;
  private subcriptionParam: Subscription;



  constructor(
    private platesService: PlatesService,
    private route: ActivatedRoute
  ) { 
    this.mealPlate = new MealPlate();
    this.ingredientsList = [];
    this.subcriptionParam = new Subscription();
  }


  ngOnInit(): void {
    
    this.subcriptionParam = this.route.params.subscribe(params => {
      
      if (Object.keys(params).length === 0) {
        this.getRandomPlate();
      }else {
        this.platesService.getPlateById(params.id).then((response:any) => {
            console.log('por ID ->', response);
            const plate = response.meals[0];
            this.mealPlate.name = plate.strMeal;
            this.mealPlate.image = plate.strMealThumb;
            this.ingredientsList.push(plate.strIngredient1);
            this.ingredientsList.push(plate.strIngredient2);
            this.ingredientsList.push(plate.strIngredient3);
            this.ingredientsList.push(plate.strIngredient4);
            this.ingredientsList.push(plate.strIngredient5);
            
        }).catch(err => {
          console.error(err)
        });
      }
    

  });

  }

  getRandomPlate = () => {
    this.platesService.getRandomPlate().then((res: any) => {
      console.log({res});
      const plate = res.meals[0];
      this.mealPlate.name = plate.strMeal;
      this.mealPlate.image = plate.strMealThumb;
      this.ingredientsList.push(plate.strIngredient1);
      this.ingredientsList.push(plate.strIngredient2);
      this.ingredientsList.push(plate.strIngredient3);
      this.ingredientsList.push(plate.strIngredient4);
      this.ingredientsList.push(plate.strIngredient5);
    }).catch(err => {
      console.error({err});
    });
  }

  ngOnDestroy(): void {
    this.subcriptionParam.unsubscribe();
  }

}
