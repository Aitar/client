import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../service/data/data.service';
import {Passage} from '../../../assets/model/Passage.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy{
  loadedPassages: Passage[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.passages.subscribe( passages => {
      this.loadedPassages = passages;
    })
  }

  ngOnDestroy(): void {
  }

}
