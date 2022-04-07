import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PlatesService {

  constructor(private httpClient: HttpClient) { }

  
  /**
   * @description Gets a random plate from a public API
   */
  getRandomPlate() {
    return new Promise((resolve, reject) => {

      const url = `${environment.urlDomain}random.php`;

      this.httpClient.get(url).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });

    });
  }

  /**
   * @description Gets a plate by a id
   */
  getPlateById(id: number) {
    return new Promise((resolve, reject) => {

      const url = `${environment.urlDomain}lookup.php?i=${id}`;

      this.httpClient.get(url).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });

    });
  }

}
