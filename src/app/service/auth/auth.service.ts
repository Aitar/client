import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {User} from '../../../assets/model/User.model';
import {mockUsers} from '../../../assets/mockData/mock-users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuth = false;
  private _userId = 'user1';
  private _curUser: User = mockUsers[0];

  constructor(private httpService: HttpService) {}

  get curUser(){
    let user = this.httpService.getUserById('user1');
    console.log(user);
    return this._curUser;
  }

  get userId(){
    return this._userId;
  }

  get userIsAuth(){
    return this._userIsAuth;
  }

  login(){
    console.log('login!');
    this._userIsAuth = true;
  }

  logout(){
    console.log('logout!');
    this._userIsAuth = false;
  }
}
