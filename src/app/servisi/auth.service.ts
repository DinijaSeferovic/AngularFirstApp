import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userPodaci = new BehaviorSubject<User>(new User());

  constructor(private http: HttpClient, private router: Router) { }

  public login(userForm: any) {

    return this.http.post<any>(`https://www.angular-kurs.online/api/login`, userForm).pipe(map(odgovor => {
      localStorage.setItem('authToken', odgovor.token);
      this.setUserDetalji();
      return odgovor;
    }))
  }

  public setUserDetalji() {
    if (localStorage.getItem('authToken')) {
      const user = new User();
      const userDekodiraniDetalji = JSON.parse(window.atob(localStorage.getItem('authToken').split('.')[1]));
      user.prezime = userDekodiraniDetalji.prezime;
      user.ime = userDekodiraniDetalji.ime;
      user.userType = userDekodiraniDetalji.role;
      user.username = userDekodiraniDetalji.sub;
      user.isLoggedIn = true;
      this.userPodaci.next(user)
    }
  }

  public logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['login']);
    this.userPodaci.next(new User());
  }

}

