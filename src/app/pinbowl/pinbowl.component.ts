import { Component } from '@angular/core';

@Component({
  selector: 'app-pinbowl',
  templateUrl: './pinbowl.component.html',
  styleUrls: ['./pinbowl.component.sass'],
})
export class PinbowlComponent {
  totalScore: number;
  rollsArray: number[];
  constructor() {
    this.totalScore = 0;
    this.rollsArray = [];
  }

  roll(pins: number) {
    this.rollsArray.push(pins);
  }

  score() {
    let totoalScore = 0;
    let rollIndex = 0;
    const totalFrames = 10;
    for (let frameIndex = 0; frameIndex < totalFrames; frameIndex++) {
      const currentFrameScore =
        this.rollsArray[rollIndex] + this.rollsArray[rollIndex + 1];
      const currentRollScore = this.rollsArray[rollIndex];
      if (currentRollScore == 10) {
        // strike
        totoalScore +=
          currentRollScore +
          this.rollsArray[rollIndex + 1] +
          this.rollsArray[rollIndex + 2]; // current roll is 10, current + 1 & current +2 are next two rolls of the following frame
        rollIndex += 1;
      } else if (currentFrameScore == 10) {
        // spare (4+6)
        totoalScore += this.rollsArray[rollIndex + 2] + 10; // current roll is 4, current + 1 roll is 6, current + 2 which is the first roll of the following frame
        rollIndex += 2;
      } else {
        totoalScore += currentFrameScore;
        rollIndex += 2;
      }
    }
    return totoalScore;
  }
}
