import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../../assets/model/User.model';
import {mockUsers} from '../../../assets/mockData/mock-users';
import {MockDataBaseService} from '../mock-data-base.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private dataBase: MockDataBaseService) { }

  getUserById(id: string){
    let curUser;
    this.dataBase.users
        .subscribe(users => {
          for(let user of users)
            if (user.userId === id)
              curUser = user;
        });
    return curUser;
  }
}
