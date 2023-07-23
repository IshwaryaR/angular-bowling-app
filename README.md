# Ten Pin Bowling Game Calculator

This project was generated with 

* @angular/cli                    16.1.4
* @angular/material               16.1.5
* rxjs                            7.8.1
* typescript                      5.1.6

This calculates the score during a game of ten pin bowling.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Have used ngrx for state management

## Game Rules

* A game consists of ten frames. Frame 1-9 are composed of two rolls. 
* If the user strikes in the first roll, then the second roll will not be played and moves to next frame.
* Frame 10 can be composed of up to three rolls depending on if the first rolls in the frame is a strike or a spare. 
* Each frame can have one of three marks: 
  * Strike: all 10 pins where knocked down with the first roll.
  * Spare: all 10 pins where knocked down using two rolls.
  * Open: some pins where left standing after the frame was completed.
* When calculating the total score, the sum of the score for each frame is used.
  * For an open frame the score is the total number of pins knocked down.
  * For a strike, the score is 10 + the sum of the two rolls in the following frame.
  * For a spare, the score is 10 + the number of pins knocked down in the first roll of the following frame. 
  
* The tenth frame may be composed of up to three rolls: the bonus roll(s) following a strike or spare in the tenth (sometimes referred to as the eleventh and twelfth frames) are fill ball(s) used only to calculate the score of the mark rolled in the tenth. 

Test case written for the following possible scenarios

 * -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||          = 0

 * 1/1  ||  1/1  ||  1/1  ||  1/1  ||  1/1  ||  1/1  ||  1/1  ||  1/1  ||  1/1  ||  1/1   ||        = 20

 * 10  ||  10  ||  10  ||  10  ||  10  ||  10  ||  10  ||  10  ||  10  ||  10  ||  10  ||  10  ||   = 300

 * 4/6  ||  3/2  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||         = (10 + 3) + 5 = 18 (NULL ROLLS 16 )

 * 10  ||  3/2  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||  -/-  ||          = (10 + 3 + 2)+ (3 + 2) = 20 (NULL ROLLS 17 )

