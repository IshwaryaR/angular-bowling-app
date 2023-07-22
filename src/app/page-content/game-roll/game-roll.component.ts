import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/models/frame.model';
import { PinBowlService } from 'src/app/pin-bowl.service';
import { addFrameRoll, resetFrameRoll } from '../state/roll.actions';
import { Observable } from 'rxjs';
import { getFrames } from '../state/roll.selector';
import { AppState } from 'src/app/app.state';
import { addFrameCount, resetFrameCount } from '../state/framecount.actions';
import { addTotalScore, resetTotalScore } from '../state/totalscore.actions';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-game-roll',
  templateUrl: './game-roll.component.html',
  styleUrls: ['./game-roll.component.sass'],
})
export class GameRollComponent implements OnInit {
  posts: Observable<Posts[]> | undefined;
  scoreBoard!: FormGroup;
  framecount: number | undefined;
  // inputMessage: any;
  submitted = false;
  totalscore: number | undefined;
  constructor(
    private _formBuilder: FormBuilder,
    private _myService: PinBowlService,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {}

  formValidationCheck(scoreBoard: FormGroup) {
    const firstroll = scoreBoard.get('firstroll')?.value;
    const secondroll = scoreBoard.get('secondroll')?.value;
    const thirdroll = scoreBoard.get('thirdroll')?.value;
    if (
      firstroll !== 10 &&
      (secondroll === null || secondroll === undefined || secondroll === '')
    ) {
      return { secondrollrequired: true };
    }
    if (firstroll + secondroll > 10 && !thirdroll) {
      return { range: true };
    }
    return null;
  }

  onReset() {
    this.store.dispatch(resetFrameRoll());
    this.store.dispatch(resetFrameCount());
    this.store.dispatch(resetTotalScore());
    this.scoreBoard.reset();
    this.submitted = false;
  }
  updateScore() {
    this.submitted = true;
    if (this.scoreBoard.invalid) {
      return;
    }
    /** Get data from service compoent using BehaviorSubject */
    /* let frameId = {
      id: 'Frame ' + (this.inputScores.posts.length + 1),
    };
    this.inputScores.posts.push({
      ...this.scoreBoard.value,
      frameId: frameId.id,
    });
    this._myService.updateBowlingData(JSON.stringify(this.inputScores.posts)); */

    this._myService.roll(this.scoreBoard.value.firstroll);
    this.scoreBoard.value.secondroll !== null &&
    this.scoreBoard.value.secondroll !== undefined &&
    this.scoreBoard.value.secondroll !== ''
      ? this._myService.roll(this.scoreBoard.value.secondroll)
      : null;
    this.scoreBoard.value.thirdroll !== null &&
    this.scoreBoard.value.thirdroll !== undefined &&
    this.scoreBoard.value.thirdroll !== ''
      ? this._myService.roll(this.scoreBoard.value.thirdroll)
      : null;
    const value = this._myService.score();
    const frame: Posts = {
      firstroll: this.scoreBoard.value.firstroll,
      secondroll: this.scoreBoard.value.secondroll,
      thirdroll: this.scoreBoard.value.thirdroll,
      score: value,
    };
    this.store.dispatch(addFrameRoll({ frame }));
    this.store.dispatch(addFrameCount());
    this.store.dispatch(addTotalScore({ totalscore: value }));
    this.scoreBoard.reset();
    this.submitted = false;
    if (this.framecount && this.framecount > 10) {
      this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '600px',
      height: '210px',
      data: {
        totalscore: this.totalscore,
      },
      backdropClass: 'confirmDialogComponent',
      hasBackdrop: true,
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data.clicked === 'newgame') {
        this.onReset();
      }
    });
  }

  getFrameScore() {
    return JSON.stringify(this._myService.getFrameScore());
  }

  ngOnInit() {
    /** Get data from service compoent using BehaviorSubject */
    // this._myService.bowlingData.subscribe((data) => (this.inputMessage = data));
    this.posts = this.store.select(getFrames);
    this.store
      .select('totalscore')
      .subscribe((data) => (this.totalscore = data.totalscore));
    this.store
      .select('framecount')
      .subscribe((data) => (this.framecount = data.framecount));
    this.scoreBoard = this._formBuilder.group(
      {
        firstroll: [
          '',
          [
            Validators.required,
            Validators.maxLength(2),
            Validators.minLength(1),
            Validators.min(0),
            Validators.max(10),
          ],
        ],
        secondroll: [
          '',
          [
            Validators.maxLength(2),
            Validators.minLength(1),
            Validators.min(0),
            Validators.max(10),
          ],
        ],
        thirdroll: [
          '',
          [
            Validators.maxLength(2),
            Validators.minLength(1),
            Validators.min(0),
            Validators.max(10),
          ],
        ],
      },
      { validators: this.formValidationCheck }
    );
  }
}
