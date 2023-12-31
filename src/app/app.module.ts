import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageContentComponent } from './page-content/page-content.component';
import { FooterComponent } from './footer/footer.component';
import { GameRollComponent } from './page-content/game-roll/game-roll.component';
import { PinGameService } from './service/pin-game.service';
import { GameScoreComponent } from './page-content/game-score/game-score.component';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './page-content/state/game.reducer';
import { MatDialogModule } from '@angular/material/dialog';
import { counterReducer } from './page-content/state/framecount.reducer';
import { scoreReducer } from './page-content/state/totalscore.reducer';
import { PopUpComponent } from './page-content/pop-up/pop-up.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageContentComponent,
    FooterComponent,
    GameRollComponent,
    GameScoreComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      frames: gameReducer,
      framecount: counterReducer,
      totalscore: scoreReducer,
    }),
    MatDialogModule,
  ],
  providers: [PinGameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
