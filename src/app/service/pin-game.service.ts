import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PinGameService {
  pinsArray: number[];
  constructor() {
    this.pinsArray = [];
  }

  /**  Action when user knocks the pins * @param pins number of pins knocked down   */
  bowling(pins: number): void {
    this.pinsArray.push(pins);
  }

  /**  Function when user resets the reset button */
  resetGame() {
    this.pinsArray = [];
  }

  /**  function to calculate the current score * @returns total score   */
  calculate() {
    if (this.pinsArray.length === 0) {
      return { score: 0 };
    } else {
      let totalScore = 0;
      let rollIndex = 0;
      const totalFrames = 10;
      for (let frameIndex = 0; frameIndex < totalFrames; frameIndex++) {
        if (this.pinsArray[rollIndex] === undefined) {
          continue;
        }
        const currentRollScore = this.pinsArray[rollIndex];
        const currentFrameScore =
          currentRollScore + this.pinsArray[rollIndex + 1];
        if (
          currentRollScore == 10 ||
          (frameIndex == 9 && currentFrameScore >= 10)
        ) {
          // strike
          totalScore +=
            currentRollScore +
            (this.pinsArray[rollIndex + 1] || 0) +
            (this.pinsArray[rollIndex + 2] || 0); // current roll is 10, current + 1 & current +2 are next two rolls of the following frame
          rollIndex += 1;
        } else if (currentFrameScore == 10) {
          // spare (4+6)
          totalScore += (this.pinsArray[rollIndex + 2] || 0) + 10; // current roll is 4, current + 1 roll is 6, current + 2 which is the first roll of the following frame
          rollIndex += 2;
        } else {
          totalScore += currentFrameScore; // normal score
          rollIndex += 2;
        }
      }
      return { score: totalScore };
    }
  }
}
