import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScoreState } from 'src/app/models/game.model';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.sass'],
})
export class PopUpComponent {
  totalscore: number | undefined;
  constructor(@Inject(MAT_DIALOG_DATA) public data: ScoreState) {
    this.totalscore = data.totalscore;
  }
}
