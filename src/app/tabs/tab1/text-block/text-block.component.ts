import {Component, Input, OnInit} from '@angular/core';
import {Passage} from '../../../../assets/model/Passage.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss'],
})
export class TextBlockComponent implements OnInit {

  @Input() curPassage: Passage;

  constructor(private router: Router) { }

  ngOnInit() {}

  thumbStyle = {
    width: '32px',
    height: '32px'
  };

    jumpDetail() {
      this.router.navigate(['/', 'text', this.curPassage.passId]);
    }
}
