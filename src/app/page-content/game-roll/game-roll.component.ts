import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Frames } from 'src/app/models/game.model';
import { PinGameService } from 'src/app/service/pin-game.service';
import { addFrameRoll, resetFrameRoll } from '../state/game.actions';
import { Observable } from 'rxjs';
import { getFrames } from '../state/game.selector';
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
  /** Declarations */
  frames: Observable<Frames[]> | undefined;
  scoreBoard!: FormGroup;
  framecount: number | undefined;
  submitted = false;
  totalscore: number | undefined;

  constructor(
    private _formBuilder: FormBuilder,
    private _myService: PinGameService,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {}

  /**  Action when user clicks reset button   */
  onReset() {
    this.store.dispatch(resetFrameRoll());
    this.store.dispatch(resetFrameCount());
    this.store.dispatch(resetTotalScore());
    this._myService.resetGame();
    this.scoreBoard.reset();
    this.submitted = false;
  }

  /** Function which runs to push the number of pins on each frame*/
  rollAction() {
    const scoreBoardValues = this.scoreBoard.value;
    this._myService.bowling(scoreBoardValues.firstroll);
    scoreBoardValues.secondroll !== null &&
    scoreBoardValues.secondroll !== undefined &&
    scoreBoardValues.secondroll !== ''
      ? this._myService.bowling(scoreBoardValues.secondroll)
      : null;
    scoreBoardValues.thirdroll !== null &&
    scoreBoardValues.thirdroll !== undefined &&
    scoreBoardValues.thirdroll !== ''
      ? this._myService.bowling(scoreBoardValues.thirdroll)
      : null;
  }

  /**  Function which runs when user submits the Form */
  formSubmit() {
    this.submitted = true;
    if (this.scoreBoard.invalid) return;
    this.rollAction();

    const { score } = this._myService.calculate();
    const frame: Frames = {
      firstroll: this.scoreBoard.value.firstroll,
      secondroll: this.scoreBoard.value.secondroll,
      thirdroll: this.scoreBoard.value.thirdroll,
      score: score,
    };

    this.store.dispatch(addFrameRoll({ frame }));
    this.store.dispatch(addTotalScore({ totalscore: score }));
    this.framecount && this.framecount === 10
      ? this.openDialog()
      : this.store.dispatch(addFrameCount());
    this.scoreBoard.reset();
    this.submitted = false;
  }

  /**  Pop up function which runs when the game is over */
  openDialog() {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '400px',
      height: '180px',
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
  /** Custom validation function to validate the form */
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

  ngOnInit() {
    this.frames = this.store.select(getFrames);
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
