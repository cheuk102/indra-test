import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-plates',
  templateUrl: './plates.component.html',
  styleUrls: ['./plates.component.scss']
})
export class PlatesComponent implements OnInit {

  categories: any;
  areas: any;
  categorySelected: string;
  areaSelected: string;
  filteredMeals: any;
  filteredMealsBk: any;

  constructor(
    private filterService: FilterService) { 
      this.categorySelected = '';
      this.areaSelected = '';
    }

  ngOnInit(): void {
    this.getCategories();
    this.getAreas();
  }

  getCategories():void {
    this.filterService.getCategories().then((response:any) => {
      this.categories = response.meals;
      console.log({response});
      
    }).catch(err => {
      console.error(err);
    });
  }

  getAreas():void {
    this.filterService.getAreas().then((response:any) => {
      this.areas = response.meals;
      console.log({response});
      
    }).catch(err => {
      console.error(err);
    });
  }

  searchMeals() {

    if (this.categorySelected !== '') {
      this.filterService.filterMealByCategory(this.categorySelected).then((response: any) => {
        console.log('filtro ->', response);
        this.filteredMeals = response.meals;
        this.filteredMealsBk = response.meals;
      }).catch(err => {
        console.error(err);
      });
    }

    if (this.areaSelected !== '') {
      this.filterService.filterMealByArea(this.areaSelected).then((response: any) => {
        console.log('filtro ->', response);
        this.filteredMeals = response.meals;
        this.filteredMealsBk = response.meals;
      }).catch(err => {
        console.error(err);
      });
    }
  }

  searchMealsManually(event: any): void {
    const val = event.target.value.toLowerCase();

    const filterMeal = this.filteredMealsBk.filter((meal: any) => {
      return (meal.strMeal.toString().toLowerCase().indexOf(val) !== -1 || !val);
    });

    this.filteredMeals = filterMeal;
  }

}
