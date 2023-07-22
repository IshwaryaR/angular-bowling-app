import { Component, OnInit } from '@angular/core';
import { PinBowlService } from '../pin-bowl.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.sass'],
})
export class PageContentComponent implements OnInit {
  constructor(private _myService: PinBowlService) {}
  getTotalScore() {
    return this._myService.getTotalScore();
  }

  ngOnInit() {}
}
