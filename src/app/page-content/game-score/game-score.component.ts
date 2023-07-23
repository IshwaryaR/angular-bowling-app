import { Frames } from 'src/app/models/game.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { getFrames } from '../state/game.selector';
@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.sass'],
})
export class GameScoreComponent implements OnInit {
  frames: Observable<Frames[]> | undefined;
  numbers: number[];
  framecount: number | undefined;
  constructor(private store: Store<AppState>) {
    this.numbers = Array(10).fill(0);
  }

  ngOnInit() {
    this.frames = this.store.select(getFrames);
    this.store
      .select('framecount')
      .subscribe((data) => (this.framecount = data.framecount));
  }
}
