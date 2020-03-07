import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self',
  templateUrl: './self.page.html',
  styleUrls: ['./self.page.scss'],
})
export class SelfPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  flag = true;
  index = 1;

  onChange(item) {
    console.log('onChange', item);
  }

  onTabClick(item) {
    console.log('onTabClick', item);
  }

  selectCard(e) {
    console.log(' ', JSON.stringify(e));
  }

  changeIndex() {
    this.index = 0;
  }
}
