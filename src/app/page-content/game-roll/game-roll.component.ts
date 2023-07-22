import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/models/frame.model';
import { PinBowlService } from 'src/app/pin-bowl.service';
import { addFrameRoll, resetFrameRoll } from '../state/roll.actions';
import { Observable } from 'rxjs';
import { getFrames } from '../state/roll.selector';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-game-roll',
  templateUrl: './game-roll.component.html',
  styleUrls: ['./game-roll.component.sass'],
})
export class GameRollComponent implements OnInit {
  posts: Observable<Posts[]> | undefined;
  scoreBoard!: FormGroup;
  /* inputScores: any = {
    posts: [],
  }; */
  inputMessage: any;
  submitted = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _myService: PinBowlService,
    private store: Store<AppState>
  ) {}

  formValidationCheck(fg: FormGroup) {
    const firstroll = fg.get('firstroll')?.value;
    const secondroll = fg.get('secondroll')?.value;
    if (firstroll !== 10 && !secondroll) {
      return { secondrollrequired: true };
    }
    if (firstroll + secondroll <= 10) {
      return null;
    }
    return { range: true };
  }

  onReset() {
    const frame: Posts = {
      firstroll: 0,
      secondroll: 0,
    };
    this.store.dispatch(resetFrameRoll({ frame }));
    this.scoreBoard.reset();
    this.submitted = false;
  }
  updateScore() {
    this.submitted = true;
    if (this.scoreBoard.invalid) {
      return;
    }
    const frame: Posts = {
      firstroll: this.scoreBoard.value.firstroll,
      secondroll: this.scoreBoard.value.secondroll,
    };
    this.store.dispatch(addFrameRoll({ frame }));

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
    this.scoreBoard.value.secondroll && this.scoreBoard.value.secondroll !== ''
      ? this._myService.roll(this.scoreBoard.value.secondroll)
      : null;
    this._myService.score();
    this.scoreBoard.reset();
    this.submitted = false;
  }
  getFrameScore() {
    return JSON.stringify(this._myService.getFrameScore());
  }
  validatorForSecondRoll(scoreBoard: any) {
    debugger;
    // return user.role === x ? Validators.required : Validators.nullValidator;
  }
  ngOnInit() {
    /** Get data from service compoent using BehaviorSubject */
    // this._myService.bowlingData.subscribe((data) => (this.inputMessage = data));
    this.posts = this.store.select(getFrames);

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
