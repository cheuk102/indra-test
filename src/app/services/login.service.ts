import { Injectable } from '@angular/core';
import { User } from '../components/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validateUser(user: User) {
    return new Promise((resolve, reject) => {
      if (user.user === 'user' && user.password === 'root') {
        sessionStorage.setItem('isLogged', 'true');
        sessionStorage.setItem('saveSession', user.session === null ? 'false' : 'true');
        resolve('User exist!');
      } else {
        reject({
          msg: 'El usuario no existe',
          status: 404
        });
      }
    });
  }
}
