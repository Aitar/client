import { Injectable } from '@angular/core';
import {Passage} from '../../../assets/model/Passage.model';
import {BehaviorSubject, Observable} from 'rxjs';
import { mockPassges } from '../../../assets/mockData/mock-passages'
import { mockUsers } from '../../../assets/mockData/mock-users'
import {User} from '../../../assets/model/User.model';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _passages = new BehaviorSubject<Passage[]>(mockPassges);
  private _users = new BehaviorSubject<User[]>(mockUsers);

  constructor() { }

  get passages(){
    return this._passages.asObservable();
  }

  get users(){
    return this._users.asObservable();
  }

  getPassage(id: string){
    return this.passages.pipe(
        take(1),
        map(passages => {
          return {...passages.find(p => p.passId == id)}
        })
    );
  }

  getUser(userId: string){
    return this.users.pipe(
        take(1),
        map( users => {
          return {...users.find( user => user.userId == userId)}
        })
    );
  }
}
