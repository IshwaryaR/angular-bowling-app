import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PinGameService {
  totalScore: number;
  rollsArray: number[];
  frameTotal: number[];
  public bowlingDataValue = new BehaviorSubject<string>('');
  bowlingData = this.bowlingDataValue.asObservable();
  updateBowlingData(data: string) {
    this.bowlingDataValue.next(data);
  }
  constructor() {
    this.totalScore = 0;
    this.rollsArray = [];
    this.frameTotal = [];
  }
  roll(pins: number) {
    this.rollsArray.push(pins);
  }
  getFrameScore() {
    return this.frameTotal;
  }
  getCurrentFrame() {}
  getTotalScore() {
    return this.totalScore;
  }
  score() {
    if (this.rollsArray.length === 0) {
      return 0;
    } else {
      let totalScore = 0;
      let rollIndex = 0;
      const totalFrames = 10;
      for (let frameIndex = 0; frameIndex < totalFrames; frameIndex++) {
        if (this.rollsArray[rollIndex] === undefined) {
          continue;
        }
        const currentFrameScore =
          this.rollsArray[rollIndex] + this.rollsArray[rollIndex + 1];
        const currentRollScore = this.rollsArray[rollIndex];
        if (currentRollScore == 10) {
          // strike
          totalScore +=
            currentRollScore +
            (this.rollsArray[rollIndex + 1] || 0) +
            (this.rollsArray[rollIndex + 2] || 0); // current roll is 10, current + 1 & current +2 are next two rolls of the following frame
          rollIndex += 1;
        } else if (currentFrameScore == 10) {
          // spare (4+6)
          totalScore += (this.rollsArray[rollIndex + 2] || 0) + 10; // current roll is 4, current + 1 roll is 6, current + 2 which is the first roll of the following frame
          rollIndex += 2;
        } else {
          totalScore += currentFrameScore; // normal score
          rollIndex += 2;
        }
      }
      this.totalScore = totalScore;
      this.frameTotal.push(totalScore);
      return totalScore;
    }
  }
}
