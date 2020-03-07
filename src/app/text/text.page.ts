import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {Passage} from '../../assets/model/Passage.model';
import {DataService} from '../service/data/data.service';
import {User} from '../../assets/model/User.model';

@Component({
  selector: 'app-text',
  templateUrl: './text.page.html',
  styleUrls: ['./text.page.scss'],
})
export class TextPage implements OnInit {
  private passSub: Subscription;
  private userSub: Subscription;
  private curPass: Passage;
  private curUser: User;

  hidden: boolean = false;
  fullScreen: boolean = false;
  topFlag: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  tabbarStyle: object = { height: '400px' };
  selectedIndex: number = 1;

  constructor(private router: ActivatedRoute,
              private navCtrl: NavController,
              private dataService: DataService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      console.log(paramMap.get('passId'));
      //如果url中没有passId则返回
      if(!paramMap.has('passId')){
        this.navCtrl.navigateBack(['/', 'tabs', 'tab1']);
        return;
      }

      //如果有passId则获取文章并且获取成功后获取用户
      this.passSub = this.dataService.getPassage(paramMap.get('passId')).subscribe( passage => {
        this.curPass = passage;
        this.userSub = this.dataService.getUser(this.curPass.userId).subscribe( user => {
          this.curUser = user;
        });
      });

    });
  }

}
