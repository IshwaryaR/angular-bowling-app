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
  numbers: number[];
  framecount: number | undefined;
  constructor(private store: Store<AppState>) {
    this.numbers = Array(10).fill(0);
  }

  ngOnInit() {
    this.posts = this.store.select(getFrames);
    this.store
      .select('framecount')
      .subscribe((data) => (this.framecount = data.framecount));
  }
}
