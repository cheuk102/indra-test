import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private httpClient: HttpClient) {

  }

  /**
   * @description Gets a list of categories
   */
  getCategories() {
    return new Promise((resolve, reject) => {

      const url = `${environment.urlDomain}list.php?c=list`;
      this.httpClient.get(url).subscribe((response:any) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });

    });
  }

  /**
   * @description Gets a list of areas
   */
  getAreas() {
    return new Promise((resolve, reject) => {

      const url = `${environment.urlDomain}list.php?a=list`;
      this.httpClient.get(url).subscribe((response:any) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });

    });
  }

  /**
   * @description Gets a list of meals filtered by category
   */
  filterMealByCategory(category: string) {
    return new Promise((resolve, reject) => {

      const url = `${environment.urlDomain}filter.php?c=${category}`;
      this.httpClient.get(url).subscribe((response:any) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });

    });
  }

  /**
   * @description Gets a list of meals filtered by category
   */
  filterMealByArea(area: string) {
    return new Promise((resolve, reject) => {

      const url = `${environment.urlDomain}filter.php?a=${area}`;
      this.httpClient.get(url).subscribe((response:any) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });

    });
  }

}
