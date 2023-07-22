import { Posts } from 'src/app/models/frame.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { PinBowlService } from 'src/app/pin-bowl.service';
import { Observable } from 'rxjs';
import { getFrames } from '../state/roll.selector';
@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.sass'],
})
export class GameScoreComponent implements OnInit {
  posts: Observable<Posts[]> | undefined;
  numbers: any[];
  framecount: number | undefined;
  // inputMessage: any;
  scoreData: any;
  constructor(
    private _myService: PinBowlService,
    private store: Store<AppState>
  ) {
    this.numbers = Array(10).fill(0);
  }

  getScore() {
    return JSON.stringify(this._myService.getFrameScore());
  }

  ngOnInit() {
    /** Get data from service compoent using BehaviorSubject */
    /* this._myService.bowlingData.subscribe((data) => {
      this.inputMessage = data;
      return (this.inputMessage = this.inputMessage
        ? JSON.parse(this.inputMessage)
        : []);
    }); */

    this.posts = this.store.select(getFrames);
    this.scoreData = this._myService.getFrameScore();
    this.store
      .select('framecount')
      .subscribe((data) => (this.framecount = data.framecount));
  }
}
