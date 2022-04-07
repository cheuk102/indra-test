import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private httpClient: HttpClient) { }

  
  /**
   * @description Gets a list of ingrendients
   */
  getIngredients() {
    return new Promise((resolve, reject) => {

      const url = `${environment.urlDomain}list.php?i=list`;
      this.httpClient.get(url).subscribe((response:any) => {
        const ingredientsList = response.meals;
        resolve(ingredientsList.splice(0,10));
      }, (error) => {
        reject(error);
      });

    });
  }
  
  /**
   * @description Gets a list of meals with a specif ingredient
   * @param ingredient
   */
  getMealsIngredients(ingredient: string) {
    return new Promise((resolve, reject) => {

      const url = `${environment.urlDomain}search.php?s=${ingredient}`;
      this.httpClient.get(url).subscribe((response:any) => {
        const ingredientsList = response.meals;
        if (ingredientsList !== null) {
          ingredientsList.splice(0,10);
        }
        resolve(ingredientsList);
      }, (error) => {
        reject(error);
      });

    });
  }

}
