import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../assets/model/User.model';
import {mockUsers} from '../../assets/mockData/mock-users';

@Injectable({
  providedIn: 'root'
})
export class MockDataBaseService {
  private _users;

  constructor() { }

  get users(){
    this._users = new BehaviorSubject<User[]>(mockUsers).asObservable();
    return this._users;
  }
}
